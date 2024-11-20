// Library
import styled from "styled-components";

// Theme
import { theme } from "@/theme/globalStyles";
import {
  displayMdBold,
  displaySmBold,
  textLgMedium,
  textMdMedium,
  textSmMedium,
} from "@/theme/typography";

export const TimelineItemAnimatedContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
`

export const TimelineItemPhotoContent = styled.div`
  width: 480px;
  height: 580px;
  background-color: ${theme.colors.white};
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.2);
  transform: translate(-50%, -50%) scale(1);
  max-height: calc(100svh - 110px);
  max-width: 85svw;
  position: absolute;
  opacity: 0;
  left: 50%;
  top: 43%;

  @media (max-width: 560px) {
    padding: 12px;
    height: 500px;
  }
`

export const TimelineItemPhoto = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: sizeGrown 15s ease alternate-reverse infinite;
  }
`

export const TimelineItemPhotoPhrase = styled.p`
  position: absolute;
  bottom: 0;
  right: -40px;
  max-width: 450px;
  color: ${theme.colors.primary[400]};
  ${textLgMedium}
  background-color: ${theme.colors.white};
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(15px);
  border-radius: 4px;
  padding: 14px 18px;
  z-index: 2;
  opacity: 0;

  @media (max-width: 560px) {
    right: -20px;
    ${textSmMedium}
    transform: translateY(20px);    
  }
`

export const TimelineItemPhrase = styled.p`
  ${displayMdBold}
  text-align: center;
  color: ${theme.colors.white};
  max-width: 800px;
  opacity: 0;

  @media (max-width: 560px) {
    ${displaySmBold}
  }
`

export const TimelineItemInitialPhrase = styled(TimelineItemPhrase)`
  transform: scale(.5);
`

export const HeartTrail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  bottom: 5px;
`

export const TimelineAnimatedTrail = styled.div`
  height: 2px;
  width: 100svw;
  background: linear-gradient(90deg, ${theme.colors.gray[200]} 50%, transparent 50%);
  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
  background-size: 20px 4px;
  background-position: 0% 0%, 100% 100%, 0% 100%, 100% 0px;
  position: absolute;
  left: -100%;
  bottom: 25px;
  animation: dashMovement 20s linear infinite;
`

export const HeartTrailDate = styled.time`
  ${textMdMedium}
  color: ${theme.colors.primary[400]};
  position: absolute;
  top: -10px;
  opacity: 0;
  white-space: nowrap;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${theme.colors.white};
  padding: 8px 12px;
  border-radius: 18px;
`

export const HeartTrailBall = styled.div`
  width: 0;
  height: 0;
  border-radius: 100%;
  background-color: ${theme.colors.white};
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 2;
  overflow: hidden;

  > svg {
    color: ${theme.colors.primary[400]};
  }
`