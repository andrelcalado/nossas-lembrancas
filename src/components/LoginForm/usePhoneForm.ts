'use client'

// Core
import { useState, useEffect } from 'react'

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
  signInWithEmailAndPassword,
} from "firebase/auth";

// Hooks
import { useAppContext } from "../ProvidersWrapper";

// Types
import { LoginMethod } from "@/types/layoutTypes";

const INITIAL_PHONE_FORM: Record<string, string | boolean> = {
  phone: '',
  code: '',
  formCode: false,
}

const INITIAL_USER_FORM: Record<string, string> = {
  user: '',
  pwd: '',
  confirmPWD: '',
}

const usePhoneForm = () => { 
  const [loginMethod, setLoginMethod] = useState<LoginMethod>("email_pwd");
  const [errorLabel, setErrorLabel] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [phoneForm, setPhoneForm] = useState<Record<string, string | boolean>>(INITIAL_PHONE_FORM);
  const [userPasswordForm, setUserPasswordForm] = useState<Record<string, string>>(INITIAL_USER_FORM);

  const { loginMode } = useAppContext();

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
    if (!loginMode) {
      if (field === 'confirmPWD') {
        if (value.length >= userPasswordForm.pwd.length && value !== userPasswordForm.pwd) {
          setErrorLabel('As senhas devem ser iguais');
        } else {
          setErrorLabel("");
        }
      } else if (field === 'pwd') {
        if (value.length < 6) {
          setErrorLabel('A senha deve ter pelo menos 6 digitos');
        } else {
          setErrorLabel("");
        }
      }
    }

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
      setErrorLabel("Email ou senha incorreta, tente novamente");
      console.log('loginErr', err);
    })
  }

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

  useEffect(() => {
    if (loginMethod === "phone") {
      window.recaptchaVerifier = new RecaptchaVerifier(firebaseAuth, 'sign-in-button', {
        'size': 'invisible'
      });
    }
  }, [loginMethod])

  useEffect(() => {
    setErrorLabel("");
  }, [loginMode])
  

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
    errorLabel,
    loginMethod,
    setLoginMethod,
  }
}

export default usePhoneForm