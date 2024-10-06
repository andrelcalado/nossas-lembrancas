// Libraries
import styled from "styled-components";

// Theme
import { theme } from "@/theme/globalStyles";
import {
  textMdMedium,
  textMdRegular
} from "@/theme/typography";

export const HeroSliderCardContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.primary[500]};
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 12px;

  @media (max-width: 800px) {
    padding: 8px;
  }
`

export const HeroSliderCardPhoto = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 12px 12px;

  img {
    height: 100%;
    width: 100%;
    max-width: unset;
    object-fit: cover;
    animation: sizeGrown 15s ease;
  }
`

export const HeroSliderDescription = styled.div`
  width: 100%;
  max-width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -30px;
  z-index: 2;
  left: -20px;
  padding: 12px 18px;
  background-color: rgba(255, 255, 255, .9);
  box-shadow: 0 0 20px 0 #00000033;
  backdrop-filter: blur(15px);
  border-radius: 12px;
  opacity: 0;

  > p {
    ${textMdRegular}
    font-style: italic;
    text-align: left;
    color: ${theme.colors.gray[700]}
  }
`

export const HeroSliderHearts = styled.div`
  opacity: .4;
  position: absolute;
  top: -40px;
  left: -50px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: ${theme.colors.primary[300]};

  svg:nth-child(1) {
    transform: translateX(30px);
  }

  svg:nth-child(2) {
    transform: translateY(-10px);
  }

  svg:nth-child(3) {
    transform: translateY(-5px);
  }
`

export const HeroSliderDate = styled.div`
  position: absolute;
  top: 20px;
  right: -50px;
  transition: .5s ease;
  pointer-events: none;
  opacity: 0;

  time {
    padding: 8px 14px;
    border-radius: 8px;
    color: ${theme.colors.gray[700]};
    ${textMdMedium}
    letter-spacing: 1px;
    background-color: rgba(255, 255, 255, .7);
    box-shadow: 0 0 20px 0 #00000033;
    backdrop-filter: blur(15px);
    position: relative;
    z-index: 2;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${theme.colors.white};
    opacity: .2;
    z-index: 1;
  }
`
