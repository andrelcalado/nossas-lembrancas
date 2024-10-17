'use client'

// Core
import React from 'react'
import Image from 'next/image';

// Styles
import 'react-phone-number-input/style.css'
import {
  AlreadyLogin,
  BottomButtons,
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
  PhoneInputComponent,  
} from './styles';

// Assets
import { CgClose } from "react-icons/cg";
// import { AiOutlineGoogle } from "react-icons/ai";
import { BiSolidSend, BiArrowFromRight } from "react-icons/bi";
import { MdPermPhoneMsg } from "react-icons/md";
import modalIllustration from '@/assets/img/login-illustration.svg';

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
    handleGoBackLoginForm,
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
          {loginMethod === 'phone' ? (
            <>
              <h3>
                {phoneForm.formCode ? 'Código Enviado' : 'Entrar com seu telefone'}
              </h3>
              <p>
                {phoneForm.formCode ? 'Você poderá visualizar o código nas notificações do seu dispositivo' : 'Enviaremos um SMS com um código para o número informado'}
              </p>
              
              <form>
                {phoneForm.formCode ? (
                  <Input
                    type='text'
                    value={phoneForm.code as string}
                    placeholder='XXXXXXX'
                    onChange={({ target }) => {
                      handleSetPhoneForm('code', target.value);
                    }}
                  />
                ) : (
                  <PhoneInputComponent
                    value={phoneForm.phone}
                    onChange={(phone: string) => handleSetPhoneForm('phone', phone)}
                    placeholder="(99) 99999-9999"
                    defaultCountry="BR"
                    maxLength={15}
                  />
                )}
                
                {errorLabel && (
                  <ErrorMessage>{errorLabel}</ErrorMessage>
                )}
              </form>

              <BottomButtons>
                <Button size="xs" variation="border" onClick={handleGoBackLoginForm}>
                  <BiArrowFromRight />
                  <span>Voltar</span>                  
                </Button>

                <Button
                  id="sign-in-button"
                  name="sign-in-button"
                  loading={loading}
                  disabled={String(phoneForm.phone).length < 14}
                  onClick={phoneForm.formCode ? handleLoginWithCode : handleSendCode}
                >
                  {!phoneForm.formCode && <BiSolidSend />}
                  {phoneForm.formCode ? 'Acessar' : 'Enviar'}
                </Button>
              </BottomButtons>              
            </>
          ) : (
            <>
              <h3>{loginMode ? 'Nossas Lembranças' : 'Criar o nosso'}</h3>
              <p>{loginMode ? 'Escolha a opção de acesso as suas lembranças' : 'Escolha a melhor forma de salvar os seus momentos'}</p>

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