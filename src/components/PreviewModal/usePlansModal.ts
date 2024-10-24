'use client'

// Core
import { useEffect, useState } from 'react'

// Types
import { PreviewModalProps } from '@/types/layoutTypes'
import { YouTubePlayer } from 'react-youtube'

const usePlansModal = ({
  openModal,
  // timelineData,
  // musicLink
}: Pick<PreviewModalProps, 'openModal' | 'timelineData' | 'musicLink'>) => {
  const [youtubeController, setYoutubeController] = useState<YouTubePlayer | null>()

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden';
    } else {
      youtubeController?.stopVideo();
      document.body.style.overflow = 'unset';
    }
  }, [openModal])
  
  return {
    setYoutubeController
  }
}

export default usePlansModal