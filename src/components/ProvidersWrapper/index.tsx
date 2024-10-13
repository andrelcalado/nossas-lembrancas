'use client'

// Core
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useRouter } from 'next/navigation'

// Libraries
import { onAuthStateChanged, User } from 'firebase/auth'

// Types
import { ProvidersWrapperContext } from '@/types/dataTypes'

// Auth
import firebaseAuth from '@/auth/firebase'

const INITIAL_CONTEXT: ProvidersWrapperContext = {
  loginModal: false,
  setLoginModal: () => null,
  loginMode: false,
  setLoginMode: () => null,
  user: null,
}

const AppContext = createContext<ProvidersWrapperContext>(INITIAL_CONTEXT)
const useAppContext: () => ProvidersWrapperContext = () => useContext(AppContext)

export const ProvidersWrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loginModal, setLoginModal] = useState<boolean>(false);
  const [loginMode, setLoginMode] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user: User | null) => {
      if (user) {
        console.log('User', user);
        setUser(user);
        router.push('/linha-do-tempo');
      } else {
        console.log('No user is signed in.');
      }
    });

    return () => unsubscribe();
  }, []) 

  return (
    <AppContext.Provider
      value={{
        loginModal,
        setLoginModal,
        loginMode,
        setLoginMode,
        user,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { useAppContext }