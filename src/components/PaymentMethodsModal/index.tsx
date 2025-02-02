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
  QRCodeContent,  
} from './styles';

// Assets
import PIXLogo from '@/assets/icon/logo-pix.svg';
import { IoIosCard } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { VscShare } from "react-icons/vsc";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { RiFileVideoLine } from "react-icons/ri";
import { LuGlobe } from "react-icons/lu";

// Types
import { PaymentMethodsModalProps } from '@/types/layoutTypes';

// Components
import PlanItem from '../PlanItem';
import Button from '../Button';

// Utils
import { timestampToDateBR } from '@/utils/dataFormats';
import Tooltip from '../Tooltip';
import QRCode from 'react-qr-code';

const PaymentMethodsModal = ({ couplePath, coupleNames } : PaymentMethodsModalProps) => {
  const {
    isCreatingCheckout,
    handleBuyByCard,
    handleBuyByPIX,
    copyLinkTooltip,
    setCopyLinkTooltip,
    handleCopyLink,
    handleGoToSite,
    handleGenerateQRCode,
    QRCodeUrl,
    qrCodeRef,
  } = usePaymentMethodsModal(coupleNames, couplePath );

  const {
    paymentMethodsModal,
    setPaymentMethodsModal,
    planSelected,
    planPaid,
    planPaidAt,
  } = useAppContext();

  const isPlanExpired = () => {
    if (planPaidAt) {
      const aux = planPaidAt.toDate();

      aux.setFullYear(aux.getFullYear() + 1);
      return aux < new Date();
    }
    return true;
  }

  return (
    <PaymentMethodsModalContent active={paymentMethodsModal}>
      {QRCodeUrl && (
        <QRCodeContent ref={qrCodeRef}>
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={QRCodeUrl}
            viewBox={`0 0 256 256`}
          />
        </QRCodeContent>
      )}
      <ModalOverlay role="button" onClick={() => setPaymentMethodsModal(false)} />

      <PaymentMethodsModalWrapper>
        <CloseButton onClick={() => setPaymentMethodsModal(false)}>
          <CgClose />
        </CloseButton>

        <h3>Faça o dia de alguém <strong>especial</strong></h3>
        <p>
          {isPlanExpired() || planPaid !== planSelected.plan ? `
            Finalize o seu presente com o plano escolhido e leve suas memórias para quem você ama. Selecione o método de pagamento e crie algo inesquecível.
          ` : `
            Escolha a melhor forma de levar essas memórias para quem você ama de forma inesquecível!
          `}
        </p>

        {isPlanExpired() || planPaid !== planSelected.plan && (
          <PlansPromotion>
            <img className="desktop" src="/assets/img/promotion-banner-1.jpg" alt="Promoção Outubro Rosa" />
            <img className="mobile" src="/assets/img/promotion-banner-1-mobile.jpg" alt="Promoção Outubro Rosa" />
          </PlansPromotion>
        )}

        <PaymentMethodsWithPlan planPaid={!isPlanExpired() && planPaid === planSelected.plan}>
          <PlanItem
            eachPlan={planSelected}
            selected
            popular={planSelected.plan === "Especial"}
            planPaid={planPaidAt && planPaid === planSelected.plan ? timestampToDateBR(planPaidAt, true) : undefined}
          />

          <PaymentMethods>
            <h3>Meios de Presentear</h3>
            {!isPlanExpired() && couplePath && planPaid === planSelected.plan ? (
              <>
                <Button
                  variation="fill"
                  onClick={() => handleCopyLink(couplePath)}
                >
                  <Tooltip
                    message="Link copiado"
                    active={copyLinkTooltip}
                    setActive={setCopyLinkTooltip}
                  />
                  <VscShare />                  
                  <span>Compartilhar link</span>
                </Button>
                <Button
                  variation="fill"
                  loading={isCreatingCheckout}
                  onClick={() => handleGoToSite(couplePath)}
                >
                  <LuGlobe />
                  <span>Visualizar Site</span>
                </Button>
                <Button
                  variation="fill"
                  onClick={async () => await handleGenerateQRCode()}
                  loading={isCreatingCheckout}
                >
                  <MdOutlineQrCodeScanner />
                  <span>Gerar QR Code</span>
                </Button>
                <Button
                  variation="fill"
                  disabled
                >
                  <RiFileVideoLine />
                  <span>Vídeo (em breve)</span>
                </Button>
              </>              
            ) : (
              <>
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
              </>
            )}
          </PaymentMethods>      
        </PaymentMethodsWithPlan>
      </PaymentMethodsModalWrapper>
    </PaymentMethodsModalContent>
  )
}

export default PaymentMethodsModal