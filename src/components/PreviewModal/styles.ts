'use client'

// Theme
import { theme } from "@/theme/globalStyles"

// Libraries
import styled, { css } from "styled-components"

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
  max-width: 800px;
  background-color: ${theme.colors.white};
  border-radius: 12px;
  z-index: 2;
`