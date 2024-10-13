'use client'

// Core
import React from 'react'
import Image from 'next/image';

// Styles
import {
  AlreadyLogin,
  CloseButton,
  ErrorMessage,
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
// import { AiOutlineGoogle } from "react-icons/ai";
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
    loginMode,
  } = useAppContext();

  const {
    phoneForm,
    handleSetPhoneForm,
    handleSendCode,
    handleLoginWithCode,
    // handleGoogleLogin,
    userPasswordForm,
    handleSetUserForm,
    handleUserLogin,
    handleUserRegister,
    loading,
    errorLabel,
    loginMethod,
    setLoginMethod,
  } = usePhoneForm();

  const getLoginButtonDisabled = () => {
    if (loginMode) {
      return !userPasswordForm.user || !userPasswordForm.pwd;
    } else {
      return (
        !userPasswordForm.user ||
        !userPasswordForm.pwd ||
        !userPasswordForm.confirmPWD ||
        !(userPasswordForm.pwd.length === userPasswordForm.confirmPWD.length) ||
        errorLabel.length > 0);
    }
  }

  return (
    <LoginModalContent active={loginModal}>
      <ModalOverlay
        role="button"
        onClick={() => setLoginModal(false)}
      />

      <LoginModalWrapper>
        <CloseButton onClick={() => setLoginModal(false)}>
          <CgClose />
        </CloseButton>

        <LoginModalContainer>
          <h3>{loginMode ? 'Nossas Lembranças' : 'Criar o nosso'}</h3>
          <p>{loginMode ? 'Escolha a opção de acesso as suas lembranças' : 'Escolha a melhor forma de salvar os seus momentos'}</p>

          {loginMethod === 'phone' ? (
            <div>
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
                <Button
                  id="sign-in-button"
                  name="sign-in-button"
                  onClick={handleSendCode}
                >
                  Enviar
                </Button>
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

              <Button size="xs" variation="border" onClick={() => setLoginMethod('email_pwd')}>
                Voltar
              </Button>
            </div>
          ) : (
            <>
              <LoginModalMethods>
                {/* <li>
                  <Button variation="border" onClick={handleGoogleLogin}>
                    <AiOutlineGoogle />
                    <span>Google</span>                
                  </Button>
                </li> */}
                <li>                  
                  <Button variation="border" onClick={() => setLoginMethod('phone')}>
                    <MdPermPhoneMsg />
                    <span>Número Telefone</span>
                  </Button>
                </li>
              </LoginModalMethods>

              <LoginModalMethodsSeparator>
                <span>ou email e senha</span>
              </LoginModalMethodsSeparator>

              <LoginWithEmailForm>
                <Input
                  type="email"
                  value={userPasswordForm.user}
                  onChange={({ target }) => {
                    handleSetUserForm('user', target.value);
                  }}
                  placeholder="Email"
                />
                <Input
                  error={errorLabel.length > 0}
                  type="password"
                  placeholder="Senha"
                  value={userPasswordForm.pwd}
                  onChange={({ target }) => {
                    handleSetUserForm('pwd', target.value);
                  }}
                />
                {!loginMode && (
                  <Input
                    error={errorLabel.length > 0}
                    value={userPasswordForm.confirmPWD}
                    onChange={({ target }) => {
                      handleSetUserForm('confirmPWD', target.value);
                    }}
                    type="password"
                    placeholder="Confirme a senha"
                  />
                )}
                {errorLabel && (
                  <ErrorMessage>{errorLabel}</ErrorMessage>
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
                <Button
                  loading={loading}
                  disabled={getLoginButtonDisabled()}
                  onClick={loginMode ? handleUserLogin : handleUserRegister}
                >
                  {loginMode ? 'Acessar' : 'Criar'}
                </Button>
              </LoginWithEmailForm>
            </>
          )}
        </LoginModalContainer>

        <LoginModalIllustration>
          <Image src={modalIllustration} alt="Ilustração do login" />
        </LoginModalIllustration>
      </LoginModalWrapper>
    </LoginModalContent>
  )
}

export default LoginForm