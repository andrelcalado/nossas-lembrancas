// Core
import React from 'react'

// Styles
import { CloseButton, ModalOverlay } from '../LoginForm/styles'
import {
  PlansList,
  PlansModalContent,
  PlansModalWrapper,
  PlansPromotion,
} from './styles'

// Components
import PlanItem from '../PlanItem';

// Types
import { PlansModalProps } from '@/types/layoutTypes'

// Assets
import { CgClose } from "react-icons/cg";

// Constants
import { PlansData } from '@/constants/dataArray';

// Hooks
import { useAppContext } from '../ProvidersWrapper';

// Utils
import { timestampToDateBR } from '@/utils/dataFormats';

const PlansModal = ({ openPlansModal, setPlansModal }: PlansModalProps) => {
  const {
    planSelected,
    setPlanSelected,
    planPaid,
    planPaidAt,    
  } = useAppContext();

  return (
    <PlansModalContent openPlansModal={openPlansModal}>
      <ModalOverlay
        role="button"
        onClick={() => setPlansModal(false)}
      />

      <PlansModalWrapper>
        <CloseButton onClick={() => setPlansModal(false)}>
          <CgClose />
        </CloseButton>

        <h2>Selecione o <strong>tamanho</strong> do seu <strong>presente</strong></h2>
        <p>Escolha o plano ideal para guardar suas memórias e surpreender quem você ama.</p>

        <PlansPromotion>
          <img className="desktop" src="/assets/img/promotion-banner-0.jpg" alt="Promoção Outubro Rosa" />
          <img className="mobile" src="/assets/img/promotion-banner-0-mobile.jpg" alt="Promoção Outubro Rosa" />
        </PlansPromotion>

        <PlansList>
          {PlansData.map((eachPlan, index) => (
            <PlanItem
              key={index}
              popular={index === 1}
              eachPlan={eachPlan}
              selected={planSelected === eachPlan}
              planPaid={planPaidAt && planPaid === eachPlan.plan ? timestampToDateBR(planPaidAt, true) : undefined}
              handleSelect={() => {
                setPlanSelected(eachPlan);
                setPlansModal(false);
              }}
            />
          ))}
        </PlansList>
      </PlansModalWrapper>
    </PlansModalContent>
  )
}

export default PlansModal