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
import { onAuthStateChanged, signOut, User } from 'firebase/auth'

// Types
import { ProvidersWrapperContext } from '@/types/dataTypes'

// Auth
import firebaseAuth from '@/auth/firebase'

const INITIAL_CONTEXT: ProvidersWrapperContext = {
  loginModal: false,
  setLoginModal: () => null,
  loginMode: false,
  setLoginMode: () => null,
  handleUserSignOut: () => null,
  user: null,
}

const AppContext = createContext<ProvidersWrapperContext>(INITIAL_CONTEXT)
const useAppContext: () => ProvidersWrapperContext = () => useContext(AppContext)

export const ProvidersWrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loginModal, setLoginModal] = useState<boolean>(false);
  const [loginMode, setLoginMode] = useState<boolean>(false);

  const handleUserSignOut = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    ev.preventDefault();

    signOut(firebaseAuth).then(() => {
      router.push('/');
      setUser(null);
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user: User | null) => {
      if (user) {
        console.log('User', user);
        setUser(user);
        setLoginModal(false);
        router.push('/linha-do-tempo');
      } else {
        console.log('No user is signed in.');
      }
    });

    return () => unsubscribe();
  }, [])

  useEffect(() => {
    if (loginModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [loginModal])

  return (
    <AppContext.Provider
      value={{
        loginModal,
        setLoginModal,
        loginMode,
        setLoginMode,
        handleUserSignOut,
        user,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { useAppContext }