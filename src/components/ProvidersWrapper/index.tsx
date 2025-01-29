'use client'

// Core
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

// Libraries
import { onAuthStateChanged, signOut, User } from 'firebase/auth'

// Types
import { PlanResourceDataType, ProvidersWrapperContext } from '@/types/dataTypes'
import { Timestamp } from 'firebase/firestore'

// Constants
import { PlansData } from '@/constants/dataArray'

// Auth
import { firebaseAuth } from '@/auth/firebase'

const INITIAL_CONTEXT: ProvidersWrapperContext = {
  loginModal: false,
  setLoginModal: () => null,
  loginMode: false,
  setLoginMode: () => null,
  paymentMethodsModal: false,
  setPaymentMethodsModal: () => null,
  handleUserSignOut: () => null,
  user: null,
  loading: false,
  planSelected: PlansData[0],
  setPlanSelected: () => null,
  planPaid: null,
  setPlanPaid: () => null,
  planPaidAt: null,
  setPlanPaidAt: () => null,
}

const AppContext = createContext<ProvidersWrapperContext>(INITIAL_CONTEXT)
const useAppContext: () => ProvidersWrapperContext = () => useContext(AppContext)

export const ProvidersWrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const verifyQuery = searchParams.get('verify');
  const [user, setUser] = useState<User | null>(null);
  const [paymentMethodsModal, setPaymentMethodsModal] = useState<boolean>(false);
  const [loginModal, setLoginModal] = useState<boolean>(false);
  const [loginMode, setLoginMode] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [planSelected, setPlanSelected] = useState<PlanResourceDataType>(PlansData[0]);
  const [planPaid, setPlanPaid] = useState<string | null>(null);
  const [planPaidAt, setPlanPaidAt] = useState<Timestamp | null>(null);

  const handleUserSignOut = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    ev.preventDefault();
    setLoading(true);

    signOut(firebaseAuth).then(() => {
      setUser(null);
      router.replace('/');
      setLoading(false);
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user: User | null) => {
      if (user) {
        setUser(user);
        console.log('user', user);

        if (window.location.pathname === '/' || window.location.pathname === '/linha-do-tempo' && !verifyQuery) {
          router.replace('/linha-do-tempo');
        }
      } else if (window.location.pathname === '/' || window.location.pathname === '/linha-do-tempo') {
        router.replace('/');
      }
    });
  
    return () => unsubscribe();
  }, [])

  useEffect(() => {
    document.body.style.overflow = loginModal || paymentMethodsModal ? 'hidden' : 'auto';
  }, [loginModal, paymentMethodsModal])

  return (
    <AppContext.Provider
      value={{
        loading,
        loginModal,
        setLoginModal,
        loginMode,
        setLoginMode,
        handleUserSignOut,
        user,
        planSelected,
        setPlanSelected,
        paymentMethodsModal,
        setPaymentMethodsModal,
        planPaid,
        setPlanPaid,
        planPaidAt,
        setPlanPaidAt,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { useAppContext }