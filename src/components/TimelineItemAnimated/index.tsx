'use client'

import React from 'react'

// Styles
import {
  HeartTrail,
  HeartTrailBall,
  HeartTrailDate,
  TimelineItemAnimatedContent,
  TimelineItemInitialPhrase,
  TimelineItemPhoto,
  TimelineItemPhotoContent,
  TimelineItemPhotoPhrase,
  TimelineItemPhrase,  
} from './styles'

// Assets
import { CiHeart } from "react-icons/ci";
import { LuCalendarHeart } from "react-icons/lu";

// Types
import { TimelineItemAnimatedProps } from '@/types/layoutTypes'

// Utils
import { stringDateToFormatedDate } from '@/utils/dataFormats';

const TimelineItemAnimated = ({
  type,
  className,
  desc,
  date,
  photo,
  mediaOrientation =  'vertical',
  albumMode = false,
  // video,
} : TimelineItemAnimatedProps) => {
  return (
    <TimelineItemAnimatedContent className={`${className}--content`}>
      {!albumMode && (
        <HeartTrail>
          {date && (
            <HeartTrailDate className={`${className}--date`}>
              <LuCalendarHeart />
              <span>{stringDateToFormatedDate(date)}</span>
            </HeartTrailDate>
          )}
          <HeartTrailBall className={`${className}--heart`}>
            <CiHeart size={30} />
          </HeartTrailBall>
        </HeartTrail>
      )}
      {type === 'initial-phrase' && (
        <TimelineItemInitialPhrase className={className}>
          {desc}
        </TimelineItemInitialPhrase>
      )}
      {(type === 'phrase' || type === 'final-phrase') && (
        <TimelineItemPhrase className={className}>
          {desc}
        </TimelineItemPhrase>
      )}

      {(type === 'photo' && photo) && (
        <TimelineItemPhotoContent
          albumMode={albumMode}
          orientation={mediaOrientation}
          className={className}
        >
          <TimelineItemPhoto>
            <img
              src={typeof photo === 'string' ? photo :  URL.createObjectURL(photo as Blob)}
              alt="Fotografia Casal"
            />
          </TimelineItemPhoto>

          {(desc && !albumMode) && (
            <TimelineItemPhotoPhrase className={`${className}--phrase`}>
              {desc}
            </TimelineItemPhotoPhrase>          
          )}
        </TimelineItemPhotoContent>
      )}
    </TimelineItemAnimatedContent>
  )
}

export default TimelineItemAnimated