'use client'

// Core
import React from 'react'

// Styles
import { CloseButton, ModalOverlay } from '../LoginForm/styles';
import { TimelineAnimatedTrail } from '../TimelineItemAnimated/styles';
import {
  PreviewModalContent,
  PreviewModalWrapper,
  TimelineDataContent,
} from './styles';

// Libraries
import YouTube, { YouTubeEvent } from "react-youtube";

// Hooks
import { useAppContext } from '../ProvidersWrapper';
import usePlansModal from './usePlansModal';

// Assets
import { CgClose } from "react-icons/cg";

// Types
import { PreviewModalProps } from '@/types/layoutTypes';

// Utils
import { getYouTubeVideoID } from '@/utils/dataFormats';

// Components
import TimelineItemAnimated from '../TimelineItemAnimated';

const PreviewModal = ({
  openModal,
  setOpenModal,
  timelineData,
  musicLink,
} : PreviewModalProps) => {
  const { planSelected } = useAppContext();
  const { setYoutubeController } = usePlansModal({
    openModal,
    timelineData,
    musicLink
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
            />
          ))}
        </TimelineDataContent>

        {(planSelected.music && musicLink) && (
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