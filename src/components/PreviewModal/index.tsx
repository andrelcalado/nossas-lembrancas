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
  SkipAnimation,
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
import { RiFileVideoLine } from "react-icons/ri";
import { IoMdExit, IoMdPhotos } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
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
  isGift = false,
  previewLoading = false,
} : PreviewModalProps) => {
  const { planSelected } = useAppContext();

  const {
    setYoutubeController,
    handleRepeatTimeline,
    handleEditTimeline,
    handleSkipAnimation,
    handleAlbumMode,
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
        {isGift ? (
          <SkipAnimation onClick={handleSkipAnimation} variation="fill-blue">
            <IoMdExit />
          </SkipAnimation>
        ) : (
          <CloseButton onClick={() => setOpenModal(false)}>
            <CgClose />
          </CloseButton>
        )}

        {watermark && (
          <PreviewLabel>
            {previewLabelContent.map(eachLabel => eachLabel)}
          </PreviewLabel>
        )}

        <TimelineDataContent>
          <TimelineAnimatedTrail className="timeline-track" />

          {(isGift && planSelected.albumMode) && timelineData.filter((eachItem) => (
            eachItem.type === 'photo' || eachItem.type === 'video'
          )).map((eachData, index) => (
            <TimelineItemAnimated
              key={index}
              className={`timeline-album-item-${index}`}
              albumMode
              type={eachData.type}
              photo={eachData.photo}
              mediaOrientation={eachData.mediaOrientation}
            />
          ))}
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

          {isGift ? (
            <>
              <Button
                variation="fill-blue"
                disabled={!planSelected.albumMode}
                onClick={handleAlbumMode}
              >
                <IoMdPhotos />
                <span>Modo Album Digital</span>
              </Button>
              <Button
                variation="fill-blue"
                disabled
              >
                <RiFileVideoLine />
                <span>Gerar Vídeo (em breve)</span>
              </Button>
              
              <Button
                variation="fill"
                onClick={handleEditTimeline}
              >
                <MdModeEdit />
                <span>Editar</span>
              </Button>
            </>
          ) : (
            <Button
              onClick={handleToGift}
              loading={previewLoading}
            >
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