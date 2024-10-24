'use client'

// Libraries
import styled from "styled-components"

// Theme
import {
  displayLgRegular,
  displayMdMedium,
  displaySmMedium,
  displayX1Regular,
  displayXsMedium,
  textMdMedium,
  textMdRegular,
  textSmMedium,
  textSmRegular,
  textX1sBold,
  textX1sMedium,
  textX1sRegular,
  textXsBold,
  textXsRegular,
} from "@/theme/typography"
import { theme } from "@/theme/globalStyles"

// Components
import { InputContent } from "@/components/Input/styles"
import { ButtonComponent } from "@/components/Button/styles"

export const TimelineWrapper = styled.div`
  z-index: 5;
  text-align: center;

  @media (max-width: 760px) {
    padding-right: calc(70px + 12px);    
  }

  > h1 {
    ${displayX1Regular}
    color: ${theme.colors.black};
    text-transform: uppercase;
    margin: 0 auto 8px;
    max-width: 700px;
    line-height: 90%;    

    @media (max-width: 1024px) {
      ${displayLgRegular}
      line-height: 90%;
    }

    @media (max-width: 800px) {
      font-size: 33px;
      max-width: 500px;
    }

    strong {
      color: ${theme.colors.primary[400]};
    }
  }

  > h3 {
    ${textMdMedium}
    margin-bottom: 4px;
    color: ${theme.colors.primary[700]};
  }

  > p {
    ${textMdRegular}
    color: ${theme.colors.gray[700]};
    max-width: 500px;
    margin: 0 auto 12px;

    @media (max-width: 1024px) {
      max-width: 450px;
    }

    @media (max-width: 800px) {
      ${textXsRegular}
    }

    @media (max-width: 760px) {
      max-width: 90%;
    }
  }

  > ${InputContent} {
    max-width: 500px;
    margin: 0 auto 56px;

    input {
      text-align: center;
    }
  }
`

export const TimelineItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 24px;
  gap: 32px;

  @media (max-width: 760px) {
    gap: 56px;
  }

  &::before {
    content: '';
    height: 1px;
    width: 100%;
    position: absolute;
    top: -24px;
    left: 50%;
    transform: translateX(-50%);
    border-bottom: 2px solid ${theme.colors.primary[100]};
    border-style: dashed solid;
    border-left: unset;
    border-top: unset;
    border-right: unset;
  }

  > h2 {
    ${displayMdMedium}
    color: ${theme.colors.primary[300]};

    @media (max-width: 760px) {
      ${displaySmMedium}
      margin-bottom: -40px;      
    }

    @media (max-width: 560px) {
      ${displayXsMedium}
    }
  }
`

export const IndicatorsPlansContent = styled.aside`
  position: fixed;
  transform: translateY(-50%);
  top: 55%;
  right: 0;

  > h4 {
    ${textXsBold}
    margin-bottom: 4px;
    color: ${theme.colors.primary[300]};
    text-transform: uppercase;

    @media (max-width: 760px) {
      ${textX1sBold}
      margin-bottom: -1px;
    }
  }
`

export const IndicatorsContent = styled.div`
  padding: 12px;
  border-radius: 12px 0 0 12px;
  border: 2px solid ${theme.colors.primary[200]};
  border-right: unset;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  backdrop-filter: blur(2px);

  @media (max-width: 760px) {
    padding: 8px;
  }

  > h5 {
    ${textX1sRegular}
    margin-bottom: -8px;
    letter-spacing: -.1px;
  }

  > p {
    ${textX1sMedium}
    margin-top: -4px;
    letter-spacing: -.1px;
    color: ${theme.colors.primary[500]};
  }
  
  &.actions {
    ${ButtonComponent} {
      padding: 10px;
      aspect-ratio: 1 / 1;
      
      svg {
        width: 20px;
        height: 20px;
      }
    }

    ${ButtonComponent}:last-child {
      box-shadow: 0 0 10px 0 rgba(255, 0, 180, 0.4);

      &:hover {
        box-shadow: 0 0 15px 0 rgba(255, 0, 180, 0.5);
      }
    }
  }
`

export const ItemIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > span {
    ${textSmMedium}
    color: ${theme.colors.primary[400]};
  }
`

export const ItemIndicatorBall = styled.div`
  padding: 8px;
  border-radius: 8px;
  background-color: ${theme.colors.primary[400]};
  height: 36px;
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 760px) {
    width: 30px;
    height: 30px;
    padding: 6px;
  }

  > svg {
    color: ${theme.colors.white};
    height: 18px;
    width: 18px;
  }
`

export const PlanSelected = styled.button`
  display: block;
  height: 56px;
  width: 56px;
  border-radius: 12px;
  overflow: hidden;
  border: 5px solid rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 5px 0 rgb(255 0 222 / 40%);
  cursor: pointer;

  @media (max-width: 760px) {
    height: 53px;
    width: 53px;
  }

  &:hover {
    box-shadow: 0 0 10px 0 rgb(255 0 222 / 50%);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const YoutubeForm = styled.div`
  max-width: 500px;
  text-align: center;
  margin: 0 auto 48px;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.secondary[100]};
    position: absolute;
    top: -30px;
    left: 0;
  }

  > h2 {
    ${displayMdMedium}
    color: ${theme.colors.black};
    text-transform: uppercase;
    margin-bottom: 8px;
    line-height: 90%;

    @media (max-width: 800px) {
      ${displaySmMedium}
      max-width: 400px;
      margin: 0 auto 8px;
      line-height: 90%;
    }

    strong {
      color: ${theme.colors.primary[400]};
    }
  }

  > p {
    ${textSmRegular}
    color: ${theme.colors.gray[700]};
    margin-bottom: 8px;

    @media (max-width: 800px) {
      ${textXsRegular}
      max-width: 80%;
      margin: 0 auto 8px;
    }

    @media (max-width: 400px) {
      max-width: 90%;
    }
  }

  input {
    text-align: center;
  }
`