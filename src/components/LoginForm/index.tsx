'use client'

// Core
import React from 'react'

// Styles
import { Login } from './styles';

// Hooks
import usePhoneForm from './usePhoneForm';

const LoginForm = () => {
  const {
    phoneForm,
    handleSetPhoneForm,
    handleSendCode,
    handleLoginWithCode,
    handleGoogleLogin
  } = usePhoneForm();

  return (
    <Login>
      {/* Phone Login */}
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

      {/* Google Login */}
      <div style={{ marginTop: 50 }}>
        <button onClick={handleGoogleLogin}>Logar com Google</button>
      </div>
    </Login>
  )
}

export default LoginForm