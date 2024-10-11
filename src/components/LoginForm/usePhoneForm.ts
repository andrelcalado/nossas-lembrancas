'use client'

// Auth
import firebaseAuth from "@/auth/firebase";

// Libraries
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  GoogleAuthProvider,
  signInWithRedirect,
  onAuthStateChanged,
  getRedirectResult,
} from "firebase/auth";

// Core
import { useState, useEffect } from 'react'

const INITIAL_PHONE_FORM: Record<string, string | boolean> = {
  phone: '',
  code: '',
  formCode: false,
}

const usePhoneForm = () => {
  const [phoneForm, setPhoneForm] = useState<Record<string, string | boolean>>(INITIAL_PHONE_FORM);

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
  
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(firebaseAuth, provider);
  }

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(firebaseAuth, 'sign-in-button', {
      'size': 'invisible'
    });
  }, [])

  useEffect(() => {
    // Verificar o estado da autenticação com redirecionamento
    getRedirectResult(firebaseAuth)
      .then((result) => {
        if (result) {
          console.log('User after redirect:', result);
        }
      })
      .catch((error) => {
        console.log('Error after redirect:', error);
      });

    // Escutar mudanças de autenticação (como no fluxo normal)
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        console.log('User from onAuthStateChanged:', user);
      } else {
        console.log('No user is signed in.');
      }
    });

    return () => unsubscribe();
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