'use client'

// Core
import React from 'react'

// Components
import Button from '../Button';

// Assets
import { CgClose } from "react-icons/cg";
import { BsCheckLg } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";

// Style
import {
  PlanItemBadges,
  PlanItemBody,
  PlanItemContent,
  PlanItemHeader,
  PlanItemHeaderTexts,
  PlanItemIllustration,
  PlanItemSelected,  
} from './styles';

// Types
import { PlanItemProps } from '@/types/layoutTypes';
import Image, { StaticImageData } from 'next/image';

// Utils
import { numberToCurrency } from '@/utils/dataFormats';

const PlanItem = ({
  eachPlan,
  popular,
  selected,
  handleSelect,
  planPaid,
}: PlanItemProps) => {
  return (
    <PlanItemContent className={popular ? 'popular' : ''}>
      <PlanItemBadges>
        {selected && (
          <PlanItemSelected>Selecionado</PlanItemSelected>
        )}
        {planPaid && (
          <PlanItemSelected>
            {eachPlan.plan !== 'Inesquecível' ? `expira: ${planPaid}` : 'Pago'}
          </PlanItemSelected>
        )}
      </PlanItemBadges>
      <PlanItemHeader>
        <PlanItemIllustration>
          <Image
            src={eachPlan.icon as StaticImageData}
            alt="Ilustração do plano"
          />
        </PlanItemIllustration>
        <PlanItemHeaderTexts>
          <h4>{eachPlan.plan} {popular && (<span>Popular</span>)}</h4>
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
          <span>Experiência exclusiva</span>
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
          <span>Música (em breve)</span>
        </li>
        <li className={eachPlan.albumMode ? '' : 'disabled'}>
          {eachPlan.albumMode ? <BsCheckLg /> : <CgClose />}
          <span>Modo Album Digital</span>
        </li>
      </PlanItemBody>

      {handleSelect && (
        <Button
          variation={popular ? 'border-white' : 'fill'}
          onClick={handleSelect}
        >
          <span>Selecionar</span>
          <FaArrowRight />
        </Button>
      )}
    </PlanItemContent>
  )
}

export default PlanItem