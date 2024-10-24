'use client'

// Core
import React from 'react'

// Styles
import { CloseButton, ModalOverlay } from '../LoginForm/styles';
import { PreviewModalContent, PreviewModalWrapper } from './styles';

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

const PreviewModal = ({
  openModal,
  setOpenModal,
  timelineData,
  musicLink,
} : PreviewModalProps) => {
  const { planSelected } = useAppContext();
  const { setYoutubeController } = usePlansModal({ openModal, timelineData, musicLink });

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