// Core
import React from 'react'
import Image, { StaticImageData } from 'next/image';

// Styles
import { CloseButton, ModalOverlay } from '../LoginForm/styles'
import {
  PlanItem,
  PlanItemBody,
  PlanItemHeader,
  PlanItemHeaderTexts,
  PlanItemIllustration,
  PlanItemSelected,
  PlansList,
  PlansModalContent,
  PlansModalWrapper,
  PlansPromotion,
} from './styles'

// Types
import { PlansModalProps } from '@/types/layoutTypes'

// Assets
import { CgClose } from "react-icons/cg";
import { BsCheckLg } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";

// Components
import Button from '../Button';

// Constants
import { PlansData } from '@/constants/dataArray';

// Utils
import { numberToCurrency } from '@/utils/dataFormats';

// Hooks
import { useAppContext } from '../ProvidersWrapper';

const PlansModal = ({ openPlansModal, setPlansModal }: PlansModalProps) => {
  const { planSelected, setPlanSelected } = useAppContext();

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
            <PlanItem className={index === 1 ? 'popular' : ''} key={index}>
              {planSelected === eachPlan && (
                <PlanItemSelected>Selecionado</PlanItemSelected>
              )}
              <PlanItemHeader>
                <PlanItemIllustration>
                  <Image
                    src={eachPlan.icon as StaticImageData}
                    alt="Ilustração do plano"
                  />
                </PlanItemIllustration>
                <PlanItemHeaderTexts>
                  <h4>{eachPlan.plan} {index === 1 && (<span>Popular</span>)}</h4>
                  <h5>{numberToCurrency(eachPlan.price)} <span> / {numberToCurrency(eachPlan.price * 1.3)}</span></h5>
                  <span>{eachPlan.planPeriod ? 'ano' : 'para sempre'}</span>
                </PlanItemHeaderTexts>
              </PlanItemHeader>
              <PlanItemBody>
                <li>
                  <BsCheckLg />
                  <span>App Exclusivo</span>
                </li>
                <li>
                  <BsCheckLg />
                  <span>Site Exclusivo</span>
                </li>
                <li>
                  <BsCheckLg />
                  <span>Animação exclusiva</span>
                </li>
                <li>
                  <BsCheckLg />
                  <span>Frase inicial</span>
                </li>
                <li>
                  <BsCheckLg />
                  <span><strong>{eachPlan.photo} Fotografias</strong></span>
                </li>
                <li>
                  <BsCheckLg />
                  <span><strong>{eachPlan.phrase} Frases entre mídias</strong></span>
                </li>
                <li>
                  <BsCheckLg />
                  <span><strong>{eachPlan.video} Vídeo{eachPlan.video > 1 ? 's' : ''} (em breve)</strong></span>
                </li>
                <li className={eachPlan.music ? '' : 'disabled'}>
                  {eachPlan.music ? <BsCheckLg /> : <CgClose />}
                  <span>Música</span>
                </li>
                <li className={eachPlan.albumMode ? '' : 'disabled'}>
                  {eachPlan.albumMode ? <BsCheckLg /> : <CgClose />}
                  <span>Modo Album Digital</span>
                </li>
              </PlanItemBody>

              <Button
                variation={index === 1 ? 'border-white' : 'fill'}
                onClick={() => {
                  setPlanSelected(eachPlan);
                  setPlansModal(false);
                }}
              >
                <span>Selecionar</span>
                <FaArrowRight />
              </Button>
            </PlanItem>
          ))}
        </PlansList>
      </PlansModalWrapper>
    </PlansModalContent>
  )
}

export default PlansModal