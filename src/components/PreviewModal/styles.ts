'use client'

// Theme
import { theme } from "@/theme/globalStyles"

// Libraries
import styled, { css } from "styled-components"
import { ButtonComponent } from "../Button/styles"

export const PreviewModalContent = styled.div<{ active: boolean }>`
  ${({ active }) => css`
    position: fixed;
    height: 100svh;
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