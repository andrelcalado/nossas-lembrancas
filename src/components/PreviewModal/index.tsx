'use client'

// Core
import React from 'react'

// Styles
import { CloseButton, ModalOverlay } from '../LoginForm/styles';
import { TimelineAnimatedTrail } from '../TimelineItemAnimated/styles';
import {
  PreviewLabel,
  PreviewModalContent,
  PreviewModalWrapper,
  TimelineActionsContent,
  TimelineDataContent,
} from './styles';

// Libraries
import YouTube, { YouTubeEvent } from "react-youtube";

// Hooks
import { useAppContext } from '../ProvidersWrapper';
import usePreviewModal from './usePreviewModal';

// Assets
import { CgClose } from "react-icons/cg";
import { FaRepeat } from "react-icons/fa6";
import { FaGift } from "react-icons/fa";

// Constants
import { previewLabelContent } from '@/constants/dataArray';

// Types
import { PreviewModalProps } from '@/types/layoutTypes';

// Utils
import { getYouTubeVideoID } from '@/utils/dataFormats';

// Components
import TimelineItemAnimated from '../TimelineItemAnimated';
import Button from '../Button';

const PreviewModal = ({
  openModal,
  setOpenModal,
  timelineData,
  musicLink,
  handleToGift,
  watermark = false,
  hiddenGiftButton = false,
} : PreviewModalProps) => {
  const { planSelected } = useAppContext();
  const {
    setYoutubeController,
    handleRepeatTimeline
  } = usePreviewModal({
    openModal,
    timelineData
  });

  return (
    <PreviewModalContent active={openModal}>
      <ModalOverlay
        role="button"
        onClick={() => setOpenModal(false)}
      />

      <PreviewModalWrapper>
        <CloseButton onClick={() => setOpenModal(false)}>
          <CgClose />
        </CloseButton>

        {watermark && (
          <PreviewLabel>
            {previewLabelContent.map(eachLabel => eachLabel)}
          </PreviewLabel>
        )}

        <TimelineDataContent>
          <TimelineAnimatedTrail className="timeline-track" />

          {timelineData.map((eachData, index) => (
            <TimelineItemAnimated
              key={index}
              className={`timeline-item-${index}`}
              type={eachData.type}
              desc={eachData.desc}
              date={eachData.date}
              video={eachData.video}
              photo={eachData.photo}
              mediaOrientation={eachData.mediaOrientation}
            />
          ))}
        </TimelineDataContent>

        <TimelineActionsContent className="timeline-actions">
          <Button variation="fill-blue" onClick={handleRepeatTimeline}>
            <FaRepeat />
            Replay
          </Button>

          {!hiddenGiftButton && (
            <Button onClick={handleToGift}>
              <FaGift />
              Presentear
            </Button>
          )}
        </TimelineActionsContent>

        {(planSelected.music && musicLink && planSelected.plan !== 'Essencial') && (
          <YouTube
            opts={{ playerVars: { autoplay: 1 } }}
            onReady={(event: YouTubeEvent) => {
              event.target.pauseVideo();
              setYoutubeController(event.target);

              const previewButton = document.querySelector('.to-view-animation');

              previewButton?.addEventListener('click', () => {
                event.target.unMute();
                event.target.playVideo();
              });
            }}
            videoId={getYouTubeVideoID(musicLink) || ''}
          />
        )}
      </PreviewModalWrapper>
    </PreviewModalContent>
  )
}

export default PreviewModal