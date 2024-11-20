'use client'

// Core
import { useEffect, useRef, useState } from 'react'

// Library
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Types
import { PreviewModalProps } from '@/types/layoutTypes'
import { YouTubePlayer } from 'react-youtube'

gsap.registerPlugin(useGSAP);

const usePreviewModal = ({
  openModal,
  timelineData,
}: Pick<PreviewModalProps, 'openModal' | 'timelineData'>) => {
  const gsapTimeline = useRef(gsap.timeline({ paused: true }));
  const [youtubeController, setYoutubeController] = useState<YouTubePlayer | null>();

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden';
      gsapTimeline.current.play();
    } else {
      if (youtubeController) {
        youtubeController.stopVideo();
      }
      gsapTimeline.current.pause().seek(0);
      document.body.style.overflow = 'auto';
    }
  }, [openModal]);

  const initAnimation = () => {
    gsapTimeline.current.clear(true);

    // gsapTimeline.current.to(`.timeline-item-1--heart`, {
    //   width: 50, height: 50, ease: "power4.out", duration: 1,
    // }, ">");
    // gsapTimeline.current.to(`.timeline-item-1--date`, {
    //   opacity: 1, top: '-45px', ease: "power4.out", duration: 1,
    // }, "<+.3");
    // gsapTimeline.current.to(`.timeline-item-1`, {
    //   opacity: 1, filter: 'blur(0)', duration: 3,
    // }, "<+.5");
    // gsapTimeline.current.to(`.timeline-item-1--phrase`, {
    //   opacity: 1, bottom: '40px', duration: 1,
    // }, "<+1");
    // gsapTimeline.current.to(`.timeline-item-1`, {
    //   transform: 'translate(-50% -50%)', scale: 1, ease: "power4.out", duration: 20,
    // }, "<");
    
    gsapTimeline.current.to('.timeline-item-0', {
      opacity: 1, filter: 'blur(0)', duration: 2,
    });
    gsapTimeline.current.to('.timeline-item-0', {
      transform: 'translate(-50% -50%)', scale: 1, ease: "power4.out", duration: 20,
    }, "<");
    gsapTimeline.current.to('.timeline-track', {
      translateX: '50%', ease: "power4.out", duration: 2,
    }, "<+2");
    gsapTimeline.current.to('.timeline-item-0--heart', {
      width: 50, height: 50, ease: "power4.out", duration: 1,
    }, "<+1");
    gsapTimeline.current.to('.timeline-item-0--content', {
      translateX: '-150%', opacity: 0, ease: "power4.out", duration: 2,
    }, ">+4");
    gsapTimeline.current.to('.timeline-item-0', {
      scale: .5, ease: "power4.out", duration: 2,
    }, "<");
    gsapTimeline.current.to('.timeline-track', {
      translateX: '100%', duration: 1.3,
    }, "<");
    gsapTimeline.current.to('.timeline-track', {
      translateX: '50%', duration: 1.3,
    }, ">-.6");

    timelineData.forEach((eachItem, index) => {
      if (index !== 0) {
        gsapTimeline.current.to(`.timeline-item-${index}--heart`, {
          width: 50, height: 50, ease: "power4.out", duration: 1,
        }, ">");
        gsapTimeline.current.to(`.timeline-item-${index}--date`, {
          opacity: 1, top: '-45px', ease: "power4.out", duration: 1,
        }, "<+.3");
        gsapTimeline.current.to(`.timeline-item-${index}`, {
          opacity: 1, filter: 'blur(0)', duration: 3,
        }, "<+.5");
        gsapTimeline.current.to(`.timeline-item-${index}--phrase`, {
          opacity: 1, bottom: '40px', duration: 1,
        }, "<+1");
        gsapTimeline.current.to(`.timeline-item-${index}`, {
          transform: 'translate(-50% -50%)', scale: 1, ease: "power4.out", duration: 20,
        }, "<");
        gsapTimeline.current.to('.timeline-track', {
          translateX: '50%', ease: "power4.out", duration: 1.3,
        }, "<+2");
        gsapTimeline.current.to(`.timeline-item-${index}--content`, {
          translateX: '-150%', opacity: 0, ease: "power4.out", duration: 1.3,
        }, ">+5");
        gsapTimeline.current.to('.timeline-track', {
          translateX: '100%', duration: 1.3,
        }, "<");
        gsapTimeline.current.to('.timeline-track', {
          translateX: '50%', duration: 1.3,
        }, ">-.6");
      }
    });

    gsapTimeline.current.to('.timeline-track', {
      translateX: '100%', duration: 1.3,
    }, "<");
    gsapTimeline.current.to('.timeline-actions', {
      left: '50%', opacity: 1, duration: 1.3, ease: "power4.out",
    }, "<-.5");
  }

  useEffect(() => {
    initAnimation();
  }, [timelineData, openModal]);

  const handleRepeatTimeline = () => {
    gsap.to('.timeline-actions', {
      left: '150%', opacity: 0, duration: 1.5, ease: "power4.out",
    });
    gsapTimeline.current.restart();
  }
  
  return {
    setYoutubeController,
    handleRepeatTimeline
  }
}

export default usePreviewModal