'use client'

// Core
import React from 'react'
import Image from 'next/image';

// Styles
import {
  CloseButton,
  LoginModalContainer,
  LoginModalContent,
  LoginModalIllustration,
  LoginModalMethods,
  LoginModalWrapper,
  ModalOverlay,  
} from './styles';

// Assets
import { CgClose } from "react-icons/cg";
import modalIllustration from '@/app/assets/img/login-illustration.svg';

// Components
import Button from '../Button';

// Hooks
import usePhoneForm from './usePhoneForm';

// Types
import { LoginFormProps } from '@/types/layoutTypes';

const LoginForm = ({ openModal, setOpenModal }: LoginFormProps) => {
  const {
    phoneForm,
    handleSetPhoneForm,
    handleSendCode,
    handleLoginWithCode,
    handleGoogleLogin
  } = usePhoneForm();

  return (
    <LoginModalContent active={openModal}>
      <ModalOverlay />

      <LoginModalWrapper>
        <CloseButton onClick={() => setOpenModal(false)}>
          <CgClose />
        </CloseButton>

        <LoginModalContainer>
          <h3>Acessar</h3>
          <p>Escolha a melhor forma de salvar o seu presente</p>

          <LoginModalMethods>
            <li>
              <Button onClick={handleGoogleLogin}>Google</Button>
            </li>
            <li>
              <Button onClick={handleGoogleLogin}>Número Telefone</Button>
            </li>
            <li>
              <Button onClick={handleGoogleLogin}>Email e Senha</Button>
            </li>
          </LoginModalMethods>

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