'use client'

// Theme
import { theme } from "@/theme/globalStyles"
import { textMdRegular, textSmMedium } from "@/theme/typography"

// Libraries
import styled from "styled-components"
import { ButtonComponent } from "../Button/styles"

export const TimelineItemContent = styled.div`
  position: relative;
  width: 100%;

  &::before {
    content: '';
    height: 1px;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%);
    width: 97%;
    position: absolute;
    border-bottom: 1px solid ${theme.colors.primary[100]};
    border-style: dashed solid;
    border-left: unset;
    border-top: unset;
    border-right: unset;
  }
`

export const TimelineItemTime = styled.div`
  position: absolute;
  left: 12px;
  background: ${theme.colors.primary[200]};
  height: calc(100% - 17px);
  width: 1.5px;
  top: 40px;

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

  &:hover {
    background-color: ${theme.colors.primary[400]};
    height: 85px;
    width: 85px;

    svg {
      color: ${theme.colors.white};
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
