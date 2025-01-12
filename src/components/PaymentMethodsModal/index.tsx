'use client'

// Core
import React from 'react'
import Image from 'next/image';

// Hooks
import { useAppContext } from '../ProvidersWrapper'
import usePaymentMethodsModal from './usePaymentMethodsModal';

// Styles
import { CloseButton, ModalOverlay } from '../LoginForm/styles';
import { PlansPromotion } from '../PlansModal/styles';
import {
  PaymentMethods,
  PaymentMethodsModalContent,
  PaymentMethodsModalWrapper,
  PaymentMethodsWithPlan,  
} from './styles';

// Assets
import PIXLogo from '@/assets/icon/logo-pix.svg';
import { IoIosCard } from "react-icons/io";
import { CgClose } from "react-icons/cg";

// Types
import { PaymentMethodsModalProps } from '@/types/layoutTypes';

// Components
import PlanItem from '../PlanItem';
import Button from '../Button';

const PaymentMethodsModal = ({ couplePath } : PaymentMethodsModalProps) => {
  const {
    isCreatingCheckout,
    handleBuyByCard,
    handleBuyByPIX,
  } = usePaymentMethodsModal();

  const {
    paymentMethodsModal,
    setPaymentMethodsModal,
    planSelected,
  } = useAppContext();

  return (
    <PaymentMethodsModalContent active={paymentMethodsModal}>
      <ModalOverlay role="button" onClick={() => setPaymentMethodsModal(false)} />

      <PaymentMethodsModalWrapper>
        <CloseButton onClick={() => setPaymentMethodsModal(false)}>
          <CgClose />
        </CloseButton>

        <h3>Faça o dia de alguém <strong>especial</strong></h3>
        <p>Finalize o seu presente com o plano escolhido e leve suas memórias para quem você ama. Selecione o método de pagamento e crie algo inesquecível.</p>

        <PlansPromotion>
          <img className="desktop" src="/assets/img/promotion-banner-0.jpg" alt="Promoção Outubro Rosa" />
          <img className="mobile" src="/assets/img/promotion-banner-0-mobile.jpg" alt="Promoção Outubro Rosa" />
        </PlansPromotion>

        <PaymentMethodsWithPlan>
          <PlanItem
            eachPlan={planSelected}
            selected
            popular={planSelected.plan === "Especial"}
          />

          <PaymentMethods>
            <h3>Meios de Presentear</h3>
            <Button
              variation="fill-blue"
              loading={isCreatingCheckout}
              onClick={async () => await handleBuyByPIX(couplePath, planSelected.plan)}
            >
              <Image src={PIXLogo} alt="Logo PIX" />

              <span>PIX</span>
            </Button>
            <Button
              onClick={async () => await handleBuyByCard(couplePath, planSelected.plan)}
              loading={isCreatingCheckout}
              variation="fill-blue"
            >
              <IoIosCard />
              <span>Cartão de Crédito</span>
            </Button>
          </PaymentMethods>      
        </PaymentMethodsWithPlan>
      </PaymentMethodsModalWrapper>
    </PaymentMethodsModalContent>
  )
}

export default PaymentMethodsModal