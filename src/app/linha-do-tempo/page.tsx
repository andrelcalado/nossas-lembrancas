'use client'

// Core
import React from 'react'
import Image from 'next/image'

// Styles
import { PageContent } from '../styles'
import {
  IndicatorsContent,
  IndicatorsPlansContent,
  ItemIndicator,
  ItemIndicatorBall,
  PlanSelected,
  TimelineItems,
  TimelineWrapper,
} from './styles'

// Components
import Loading from '@/components/Loading'
import Input from '@/components/Input'
import TimelineItem from '@/components/TimelineItem'
import Button from '@/components/Button'
import PlansModal from '@/components/PlansModal'

// Hooks
import useTimeline from './useTimeline'
import { useAppContext } from '@/components/ProvidersWrapper'

// Types
import { PlanResourceDataType } from '@/types/dataTypes'

// Assets
import { FaEye, FaGift } from "react-icons/fa";

// Constants
import { IndicatorsArray } from '@/constants/dataArray'

// Utils
import { numberToCurrency } from '@/utils/dataFormats'

const TimeLine = () => {
  const {
    loading,
    handleSetTimelineData,
    timelineData,
    coupleNames,
    setCoupleNames,
    handleAddTimelineItem,
    handleDeleteTimelineItem,
    memoriesAvailable,
    openPlansModal,
    setOpenPlansModal,
  } = useTimeline();

  const { planSelected } = useAppContext();

  return (
    <PageContent>
      {loading ? (
        <Loading loading={loading} size="lg" />
      ) : (
        <>
          <PlansModal
            openPlansModal={openPlansModal}
            setPlansModal={setOpenPlansModal}
          />

          <TimelineWrapper className='container'>
            <h1>Recrie os <strong>melhores momentos</strong></h1>
            <p>Informe os nomes de vocês, adicione todos os momentos que deseja compartilhar e surpreenda quem ama com uma experiência inesquecível</p>

            <h3>Nome do Casal</h3>
            <Input
              type="text"
              value={coupleNames}
              onChange={({ target }) => setCoupleNames(target.value)}
              placeholder="Bianca e André"
            />

            <TimelineItems>
              {coupleNames && (
                <h2>{coupleNames}</h2>
              )}

              {timelineData.map((item, index) => (
                <TimelineItem
                  key={index}
                  type={item.type}
                  desc={item.desc}
                  photo={item.photo}
                  setPhoto={(files) => handleSetTimelineData('photo', index, files as File)}
                  setDesc={(value) => handleSetTimelineData('desc', index, value)}
                  date={item.date}
                  setDate={(value) => handleSetTimelineData('date', index, value)}
                  deleteItem={() => handleDeleteTimelineItem(index)}
                />
              ))}

              {memoriesAvailable.filter((eachMemory) => eachMemory.disabled).length < 3 && (
                <TimelineItem
                  addItem={handleAddTimelineItem}
                  memoriesAvailable={memoriesAvailable}
                  type="add"
                />
              )}
            </TimelineItems>

            <IndicatorsPlansContent>
              <h4>Plano</h4>
              <IndicatorsContent>
                <h5>{planSelected.plan}</h5>
                <PlanSelected onClick={() => setOpenPlansModal(true)}>
                  <Image src={planSelected.icon} alt="Ilustração do plano" />
                </PlanSelected>
                <p>{numberToCurrency(planSelected.price)}</p>
              </IndicatorsContent>

              <h4>Disponível</h4>
              <IndicatorsContent>
                {IndicatorsArray.map((item, index) => (
                  <ItemIndicator key={index}>
                    <ItemIndicatorBall>
                      {item.icon}
                    </ItemIndicatorBall>

                    <span>
                      {
                        Number(
                          planSelected[item.field as keyof PlanResourceDataType]
                        ) - timelineData.filter(
                          (eachItem) => item.type === eachItem.type
                        ).length
                      }
                    </span>
                  </ItemIndicator>
                ))}
              </IndicatorsContent>

              <h4>Ações</h4>
              <IndicatorsContent className='actions'>
                <h5>Conferir</h5>
                <Button variation='fill-blue'>
                  <FaEye />
                </Button>

                <h5>Presentear</h5>
                <Button>
                  <FaGift />
                </Button>
              </IndicatorsContent>

            </IndicatorsPlansContent>
          </TimelineWrapper>
        </>
      )}
    </PageContent>
  )
}

export default TimeLine