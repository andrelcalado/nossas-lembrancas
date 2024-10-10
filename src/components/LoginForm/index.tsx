'use client'

// Core
import React, { useEffect } from 'react'
import Image from 'next/image';

// Styles
import {
  AlreadyLogin,
  CloseButton,
  LoginModalContainer,
  LoginModalContent,
  LoginModalIllustration,
  LoginModalMethods,
  LoginModalMethodsSeparator,
  LoginModalWrapper,
  LoginWithEmailForm,
  ModalOverlay,  
} from './styles';

// Assets
import { CgClose } from "react-icons/cg";
import { AiOutlineGoogle } from "react-icons/ai";
import { MdPermPhoneMsg } from "react-icons/md";
import modalIllustration from '@/app/assets/img/login-illustration.svg';

// Components
import Button from '../Button';
import Input from '../Input';

// Hooks
import usePhoneForm from './usePhoneForm';
import { useAppContext } from '../ProvidersWrapper';

const LoginForm = () => {
  const {
    loginModal,
    setLoginModal,
    setLoginMode,
    loginMode
  } = useAppContext();

  const {
    phoneForm,
    handleSetPhoneForm,
    handleSendCode,
    handleLoginWithCode,
    handleGoogleLogin
  } = usePhoneForm();

  useEffect(() => {
    if (loginModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [loginModal])

  return (
    <LoginModalContent active={loginModal}>
      <ModalOverlay />

      <LoginModalWrapper>
        <CloseButton onClick={() => setLoginModal(false)}>
          <CgClose />
        </CloseButton>

        <LoginModalContainer>
          <h3>{loginMode ? 'Nossas Lembranças' : 'Criar o nosso'}</h3>
          <p>{loginMode ? 'Escolha a opção de acesso as suas lembranças' : 'Escolha a melhor forma de salvar os seus momentos'}</p>

          <LoginModalMethods>
            <li>
              <Button variation="border" onClick={handleGoogleLogin}>
                <AiOutlineGoogle />
                <span>Google</span>                
              </Button>
            </li>
            <li>
              <Button variation="border" onClick={handleGoogleLogin}>
                <MdPermPhoneMsg />
                <span>Número Telefone</span>
              </Button>
            </li>
          </LoginModalMethods>

          <LoginModalMethodsSeparator>
            <span>ou email e senha</span>
          </LoginModalMethodsSeparator>

          <LoginWithEmailForm>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Senha" />
            {!loginMode && (
              <Input type="password" placeholder="Confirme a senha" />
            )}
            <AlreadyLogin onClick={(e) => {
              e.preventDefault();
              setLoginMode(!loginMode);
            }}>
              {loginMode ? (
                <span>Ainda <strong>não tenho</strong> nossas lembranças</span>
              ) : (
                <span>Já tenho <strong>nossas lembranças</strong></span>
              )}
            </AlreadyLogin>
            <Button>{loginMode ? 'Acessar' : 'Criar'}</Button>
          </LoginWithEmailForm>

          <div style={{ display: 'none' }}>
            <form>
              <label>
                Número telefone
                <input
                  type="text"
                  value={phoneForm.phone as string}
                  onChange={({ target }) => {
                    handleSetPhoneForm('phone', target.value);
                  }}
                />
              </label>
              <button
                id="sign-in-button"
                name="sign-in-button"
                onClick={handleSendCode}
              >
                Enviar
              </button>
            </form>

            {phoneForm.formCode && (
              <form style={{ marginTop: 20 }}>
                <label>
                  Código Enviado
                  <input
                    type="text"
                    value={phoneForm.code as string}
                    placeholder='XXXXXX'
                    onChange={({ target }) => {
                      handleSetPhoneForm('code', target.value);
                    }}
                  />
                </label>
                <button
                  id="sign-in-button"
                  name="sign-in-button"
                  onClick={handleLoginWithCode}
                  disabled={!phoneForm.code}
                >
                  Login
                </button>
              </form>
            )}
          </div>
        </LoginModalContainer>

        <LoginModalIllustration>
          <Image src={modalIllustration} alt="Ilustração do login" />
        </LoginModalIllustration>
      </LoginModalWrapper>
    </LoginModalContent>
  )
}

export default LoginForm