'use client'

// Theme
import { theme } from "@/theme/globalStyles"

// Libraries
import styled, { css } from "styled-components"
import { ButtonComponent } from "../Button/styles"
import { textX1Bold } from "@/theme/typography"

// Components
import Button from "../Button"

export const PreviewModalContent = styled.div<{ active: boolean }>`
  ${({ active }) => css`
    position: fixed;
    height: 100%;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999999;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${active ? 1 : 0};
    pointer-events: ${active ? 'all' : 'none'};
  `}
`

export const PreviewModalWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${theme.colors.primary[200]};
  overflow: hidden;
  height: 100%;
  z-index: 2;

  > ${ButtonComponent} {
    z-index: 3;
  }
`

export const TimelineDataContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export const TimelineActionsContent = styled.div`
  position: absolute;
  top: 50%;
  left: 150%;
  opacity: 0;
  transform: translate(-50%, -50%);
  max-width: 300px;
  width: 100%;
  background-color: ${theme.colors.white};
  border-radius: 24px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const PreviewLabel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: rotate(45deg);
  pointer-events: none;
  opacity: .1;
  z-index: 1;
  gap: 6px;

  > span {
    ${textX1Bold}
    color: ${theme.colors.white};
    text-transform: uppercase;
    white-space: nowrap;
    flex-shrink: 0;
  }
`

export const SkipAnimation = styled(Button)`
  position: fixed;
  top: 10px;
  right: 10px;
  padding: 8px;
`