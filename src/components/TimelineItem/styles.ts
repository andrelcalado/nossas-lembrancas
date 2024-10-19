'use client'

// Theme
import { theme } from "@/theme/globalStyles"
import {
  textLgRegular,
  textMdMedium,
  textMdRegular,
  textSmMedium
} from "@/theme/typography"

// Libraries
import styled from "styled-components"

// Styles
import { ButtonComponent } from "../Button/styles"
import { HeroSliderCardContent } from "../HeroSliderCard/styles"
import { InputContent } from "../Input/styles"

export const TimelineItemTime = styled.div`
  position: absolute;
  left: 12px;
  background: ${theme.colors.primary[200]};
  height: calc(100% - 17px);
  width: 1.5px;
  top: 40px;

  @media (max-width: 760px) {
    left: -12px;
    width: 1px;
    top: 17px;
    height: calc(100% + 37px);
  }

  &::before {
    content: '';
    position: absolute;
    left: -7px;
    top: -20px;
    border-radius: 100%;
    background: transparent;
    border: 2px solid ${theme.colors.primary[200]};
    height: 12px;
    width: 12px;

    @media (max-width: 760px) {
      height: 8px;
      width: 8px;
      left: -5px;
      top: -15px;
    }
  }
`

export const TimelineItemWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${ButtonComponent} {
    position: absolute;
    top: 60%;
    right: -50px;
    transform: translateY(-50%);
    padding: 10px;

    @media (max-width: 760px) {
      transform: translateX(-50%);
      top: unset;
      left: 50%;
      right: unset;
      bottom: -38px;
    }

    svg {
      width: 17px;
      height: 17px;
    }
  }
`

export const TimelineItemAddBall = styled.button`
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  height: 80px;
  width: 80px;
  cursor: pointer;

  svg {
    color: ${theme.colors.primary[500]};
  }

  &:hover, &:focus-visible, &:focus-within {
    background-color: ${theme.colors.primary[400]};
    height: 85px;
    width: 85px;

    svg {
      color: ${theme.colors.white};
    }
  }

  @media (max-width: 760px) {
    height: 70px;
    width: 70px;

    &:hover {
      height: 75px;
      width: 75px;
    }
    
  }
`

export const TimelineItemAdd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 8px;

  > span {
    display: block;
    ${textSmMedium}
    color: ${theme.colors.primary[500]};
    text-align: center;
    line-height: 95%;
    max-width: 100px;
  }
`

export const TimelineItemContent = styled.div`
  position: relative;
  width: 100%;

  &::before, &::after {
    content: '';
    position: absolute;
    border-style: dashed solid;
    border-left: unset;
    border-top: unset;
  }

  &::before {
    height: 1px;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%);
    width: 97%;
    border-bottom: 1px dashed ${theme.colors.primary[100]};
    border-right: unset;
  }

  &::after {
    width: 1px;
    left: 50%;
    bottom: -48px;
    transform: translateX(-50%);
    height: 48px;
    border-right: 1px dashed ${theme.colors.primary[100]};;
    border-bottom: unset;
    z-index: -1;

    @media (max-width: 760px) {
      height: 64px;
      bottom: -58px;
    }
  }

  &:has(${TimelineItemAdd}) {
    &::after {
      content: unset;
    }
  }
`

export const TimelineItemPhrase = styled.div`
  width: 100%;
  max-width: 500px;
  position: relative;

  > span {
    ${textMdRegular}
    display: block;
    margin-bottom: 4px;
    text-align: center;
    color: ${theme.colors.primary[500]};
  }

  textarea {
    text-align: center;
  }
`

export const TimelineItemImageUpload = styled.label`
  width: 100%;
  max-width: 500px;
  border: 2px dashed ${theme.colors.primary[200]};
  background-color: ${theme.colors.gray[100]};
  border-radius: 12px;
  padding: 32px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  opacity: .8;
  position: relative;

  > p {
    ${textLgRegular}
    color: ${theme.colors.gray[600]};
    max-width: 300px;
  }

  > svg {
    width: 45px;
    height: 45px;
    color: ${theme.colors.gray[600]};
  }

  &:hover {
    opacity: 1;

    > svg, p {
      color: ${theme.colors.primary[400]};
    }
  }

  input {
    display: none;
  }
`

export const TimelineImageItem = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 18px 12px;
  border-radius: 12px;
  background-color: ${theme.colors.gray[200]};
  border: 2px dashed ${theme.colors.primary[100]};
  position: relative;

  ${HeroSliderCardContent} {
    height: 300px;
    width: 220px;
    padding: 4px;
  }

  input, textarea {
    text-align: center;
  }

  ${InputContent}:has(input[type="date"]) {
    max-width: 220px;
  }

  > h4 {
    ${textMdMedium}
    color: ${theme.colors.primary[500]};
    margin-top: 4px;
  }
`

export const TimelineItemActions = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  gap: 8px;
  top: 60%;
  right: -50px;
  transform: translateY(-50%);
  background-color: ${theme.colors.gray[200]};
  border-radius: 8px;
  padding: 8px;
  border: 2px dashed ${theme.colors.primary[100]};
  border-left: unset;

  @media (max-width: 760px) {
    transform: translateX(-50%);
    top: unset;
    left: 50%;
    right: unset;
    bottom: -45px;
    flex-direction: row;
    border-top: unset;
    border-left: 2px dashed ${theme.colors.primary[100]};
  }

  ${ButtonComponent} {
    position: unset;
    transform: unset;
  }
`