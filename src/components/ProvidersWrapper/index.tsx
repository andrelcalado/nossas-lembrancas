'use client'

// Core
import React, {
  createContext,
  useContext,
  useState,
} from 'react'

// Types
import { ProvidersWrapperContext } from '@/types/dataTypes'

const INITIAL_CONTEXT: ProvidersWrapperContext = {
  loginModal: false,
  setLoginModal: () => null,
  loginMode: false,
  setLoginMode: () => null,
}

const AppContext = createContext<ProvidersWrapperContext>(INITIAL_CONTEXT)
const useAppContext = () => useContext(AppContext)

export const ProvidersWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loginModal, setLoginModal] = useState<boolean>(false)
  const [loginMode, setLoginMode] = useState<boolean>(false)

  return (
    <AppContext.Provider
      value={{
        loginModal,
        setLoginModal,
        loginMode,
        setLoginMode,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { useAppContext }