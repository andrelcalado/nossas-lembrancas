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
  YoutubeForm,
} from './styles'

// Components
import Loading from '@/components/Loading'
import Input from '@/components/Input'
import TimelineItem from '@/components/TimelineItem'
import Button from '@/components/Button'
import PlansModal from '@/components/PlansModal'
import PreviewModal from '@/components/PreviewModal'
import PaymentMethodsModal from '@/components/PaymentMethodsModal'

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

const Timeline = () => {
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
    musicLink,
    setMusicLink,
    openPreviewModal,
    setOpenPreviewModal,
    previewLoading,
    setPreviewLoading,
    handleSubmitForm,
    submitLoading,
    timelineItemLoading,
    timelineID,
    handleUpdateForm,
  } = useTimeline();

  const { planSelected } = useAppContext();

  return (
    <PageContent>
      {loading ? (
        <Loading
          loading={loading}
          type="screen"
        />
      ) : (
        <>
          <PlansModal
            openPlansModal={openPlansModal}
            setPlansModal={setOpenPlansModal}
          />

          <PaymentMethodsModal />

          <PreviewModal
            watermark={true}
            timelineData={timelineData}
            musicLink={musicLink}
            openModal={openPreviewModal}
            setOpenModal={setOpenPreviewModal}
            handleToGift={async () => {
              if (timelineID) {
                await handleUpdateForm();
                setOpenPreviewModal(false);
              } else {
                await handleSubmitForm();
                setOpenPreviewModal(false);
              }
            }}
          />

          <TimelineWrapper className='container'>
            <h1>Recrie os <strong>melhores momentos</strong></h1>
            <p>Informe os nomes de vocês, adicione todos os momentos que deseja compartilhar e surpreenda quem ama com uma experiência inesquecível</p>

            <h3>Nome do Casal</h3>
            <Input
              type="text"
              value={coupleNames}
              onChange={({ target }) => setCoupleNames(target.value)}
              placeholder="Jéssica e Marcelo"
              maxLength={200}
            />

            {planSelected.music && (
              <YoutubeForm>
                <h2>Escolha a Trilha Sonora <strong>Perfeita</strong></h2>
                <p>Insira o link de uma música no YouTube que será a trilha sonora de suas lembranças. A música começará logo após a experiência ser iniciada.</p>
                <Input
                  type="text"
                  value={musicLink}
                  onChange={({ target }) => setMusicLink(target.value)}
                  placeholder="https://www.youtube.com/watch?v=X8jD3F9PI7Q"
                  maxLength={200}
                  onBlur={() => {
                    setPreviewLoading(true);

                    setTimeout(() => {
                      setPreviewLoading(false);                      
                    }, 1000);
                  }}
                />
              </YoutubeForm>
            )}

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
                  mediaOrientation={item.mediaOrientation}
                  setMediaOrientation={(value) => handleSetTimelineData('mediaOrientation', index, value)}
                  setPhoto={(files) => handleSetTimelineData('photo', index, files as File)}
                  setDesc={(value) => handleSetTimelineData('desc', index, value)}
                  date={item.date}
                  setDate={(value) => handleSetTimelineData('date', index, value)}
                  deleteItem={() => handleDeleteTimelineItem(index)}
                  loading={timelineItemLoading}
                />
              ))}

              {memoriesAvailable.filter((eachMemory) => eachMemory.disabled).length < 3 && (
                <TimelineItem
                  addItem={handleAddTimelineItem}
                  memoriesAvailable={memoriesAvailable}
                  loading={timelineItemLoading}
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
                <Button
                  onClick={() => setOpenPreviewModal(true)}
                  className="to-view-animation"
                  variation='fill-blue'
                  loading={previewLoading}
                >
                  <FaEye />
                </Button>

                <h5>Presentear</h5>
                <Button
                  disabled={timelineData.length < 2 || !coupleNames}
                  onClick={async () => {
                    if (timelineID) {
                      await handleUpdateForm();
                    } else {
                      await handleSubmitForm();
                    }
                  }}
                  loading={submitLoading}
                >
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

export default Timeline