'use client'

// Auth
import firebaseAuth from "@/auth/firebase";

// Libraries
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

// Core
import { useState, useEffect } from 'react'

const INITIAL_PHONE_FORM: Record<string, string | boolean> = {
  phone: '',
  code: '',
  formCode: false,
}

const INITIAL_USER_FORM: Record<string, string> = {
  user: '',
  pwd: '',
}

const usePhoneForm = () => { 
  const [loading, setLoading] = useState<boolean>(false);
  const [phoneForm, setPhoneForm] = useState<Record<string, string | boolean>>(INITIAL_PHONE_FORM);
  const [userPasswordForm, setUserPasswordForm] = useState<Record<string, string>>(INITIAL_USER_FORM);

  const handleSetPhoneForm = (
    field: string,
    value: string | boolean,
  ) => {
    setPhoneForm((prev) => ({
      ...prev,
      [field]: value
    }));
  }

  const handleSetUserForm = (
    field: string,
    value: string,
  ) => {
    setUserPasswordForm((prev) => ({
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

  const handleUserRegister = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    ev.preventDefault();
    setLoading(true);
  
    createUserWithEmailAndPassword(
      firebaseAuth,
      userPasswordForm.user,
      userPasswordForm.pwd,
    ).then(() => {
      setLoading(false)
    }).catch((err) => {
      console.log('registerErr', err);
      setLoading(false);
    })
  }  

  const handleUserLogin = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    ev.preventDefault();
    setLoading(true);

    signInWithEmailAndPassword(
      firebaseAuth,
      userPasswordForm.user,
      userPasswordForm.pwd,
    ).then(() => {
      setLoading(false);
    }).catch((err) => {
      setLoading(false);
      console.log('loginErr', err);
    })
  }  

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(firebaseAuth, 'sign-in-button', {
      'size': 'invisible'
    });
  }, [])

  const handleGoogleLogin = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    signInWithRedirect(firebaseAuth, provider)
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }

  getRedirectResult(firebaseAuth)
    .then((result) => {
      if (result) {
        console.log('User after redirect:', result);
      }
    })
    .catch((error) => {
      console.log('Error after redirect:', error);
    }); 

  return {
    phoneForm,
    handleSetPhoneForm,
    handleSendCode,
    handleLoginWithCode,
    handleGoogleLogin,
    userPasswordForm,
    handleSetUserForm,
    handleUserRegister,
    handleUserLogin,
    loading,
  }
}

export default usePhoneForm