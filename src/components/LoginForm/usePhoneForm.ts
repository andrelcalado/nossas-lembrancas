'use client'

// Auth
import firebaseAuth from "@/auth/firebase";

// Libraries
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Core
import { useState, useEffect } from 'react'

const INITIAL_PHONE_FORM: Record<string, string | boolean> = {
  phone: '',
  code: '',
  formCode: false,
}

const usePhoneForm = () => {
  const [phoneForm, setPhoneForm] = useState<Record<string, string | boolean>>(INITIAL_PHONE_FORM)

  const handleSetPhoneForm = (
    field: string,
    value: string | boolean,
  ) => {
    setPhoneForm((prev) => ({
      ...prev,
      [field]: value
    }));
  }

  const handleSendCode = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    ev.preventDefault();

    signInWithPhoneNumber(
      firebaseAuth,
      phoneForm.phone as string,
      window.recaptchaVerifier as RecaptchaVerifier
    )
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      handleSetPhoneForm('formCode', true)
    })
    .catch((error) => {
      console.log('error', error)
    });
  }

  const handleLoginWithCode = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    ev.preventDefault()

    if (window.confirmationResult) {
      window.confirmationResult.confirm(phoneForm.code as string).then((res) => {
        console.log('code-validate', res)
      }).catch((err) => {
        console.log('code-invalidate', err)
      })
    }
  }
  
  const handleGoogleLogin = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    ev.preventDefault()
    const provider = new GoogleAuthProvider;

    signInWithPopup(firebaseAuth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
      console.log('token', token, 'user', user)
    }).catch((error) => {
      console.log('error', error)
    });
  }

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(firebaseAuth, 'sign-in-button', {
      'size': 'invisible'
    });
  }, [])
  

  return {
    phoneForm,
    handleSetPhoneForm,
    handleSendCode,
    handleLoginWithCode,
    handleGoogleLogin
  }
}

export default usePhoneForm