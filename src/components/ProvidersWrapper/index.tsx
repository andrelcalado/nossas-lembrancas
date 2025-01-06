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
import { Payment, MercadoPagoConfig } from 'mercadopago';

// Types
import { PlanResourceDataType, ProvidersWrapperContext } from '@/types/dataTypes'

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
}

const AppContext = createContext<ProvidersWrapperContext>(INITIAL_CONTEXT)
const useAppContext: () => ProvidersWrapperContext = () => useContext(AppContext)

export const ProvidersWrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [paymentMethodsModal, setPaymentMethodsModal] = useState<boolean>(false);
  const [loginModal, setLoginModal] = useState<boolean>(false);
  const [loginMode, setLoginMode] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [planSelected, setPlanSelected] = useState<PlanResourceDataType>(PlansData[0]);

  const client = new MercadoPagoConfig({ accessToken: process.env.NEXT_PUBLIC_PUBLIC_KEY_MERCADOPAGO as string });
  const payment = new Payment(client);

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
        router.replace('/linha-do-tempo');
      } else {
        router.replace('/');
      }
    });

    payment.create({
      body: { 
          transaction_amount: 37.99,
          description: 'Testando o description',
          payment_method_id: "pix",
              payer: {
                email: 'andrelcalad@gmail.com',
                identification: {
                  type: "CPF",
                  number: "61784738344",
                }
              }
            },
      requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' }
    })
    .then((result) => console.log('ó o PIX', result))
    .catch((error) => console.log('erro no PIX', error));
  
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
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { useAppContext }