'use client'

// Libraries
import styled from "styled-components"

// Theme
import {
  displayLgRegular,
  displayMdMedium,
  displayX1Regular,
  textMdMedium,
  textMdRegular,
  textSmRegular,
} from "@/theme/typography"
import { theme } from "@/theme/globalStyles"

// Components
import { InputContent } from "@/components/Input/styles"

export const TimelineWrapper = styled.div`
  z-index: 5;
  text-align: center;

  > h1 {
    ${displayX1Regular}
    color: ${theme.colors.black};
    text-transform: uppercase;
    margin: 0 auto 8px;
    max-width: 700px;
    line-height: 90%;    

    @media (max-width: 1024px) {
      ${displayLgRegular}
    }

    @media (max-width: 800px) {
      font-size: 33px;
      line-height: 105%;
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
      ${textSmRegular}
      text-align: center;
    }
  }

  > ${InputContent} {
    max-width: 500px;
    margin: 0 auto 56px;
  }
`

export const TimelineItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 24px;
  gap: 32px;

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
  }
`