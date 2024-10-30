'use client'

// Libraries
import styled from "styled-components"

// Theme
import { theme } from "@/theme/globalStyles"
import {
  displayXsBold,
  textLgBold,
  textSmMedium,
  textSmRegular,
  textX1sBold,
  textX1sMedium,
  textXsMedium,  
} from "@/theme/typography"

// Styles
import { ButtonComponent } from "../Button/styles"

export const PlanItemHeader = styled.div`
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid ${theme.colors.gray[200]};
  align-items: center;
  display: flex;
  gap: 12px;

  @media (max-width: 740px) {
    gap: 8px;
  }
`

export const PlanItemIllustration = styled.div`
  width: 71px;
  height: 71px;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 740px) {
    width: 60px;
    height: 60px;
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const PlanItemHeaderTexts = styled.div`
  display: flex;
  flex-direction: column;

  > h4 {
    ${textSmMedium}
    color: ${theme.colors.primary[500]};
  }

  > h5 {
    ${textLgBold}
    color: ${theme.colors.secondary[700]};
    position: relative;

    @media (max-width: 850px) {
      display: flex;
      flex-direction: column;
      margin-bottom: 4px;
    }

    @media (max-width: 740px) {
      ${displayXsBold}
      display: block;
      line-height: 95%;
    }

    &::after {
      content: '';
      width: 40%;
      position: absolute;
      right: -3px;
      bottom: 12px;
      height: 1px;
      background-color: ${theme.colors.gray[400]};
      transform: rotate(7deg);

      @media (max-width: 850px) {
        right: unset;
        left: 12px;
        bottom: 3px;
        width: 40px;
      }

      @media (max-width: 740px) {
        left: unset;
        right: -3px;
        bottom: 9px;
        width: 55px;
      }
    }

    span {
      font-size: 10px;
      color: ${theme.colors.gray[500]};
      line-height: 90%;
      font-weight: 500;

      @media (max-width: 850px) {
        line-height: 50%;
      }

      @media (max-width: 740px) {
        ${textXsMedium}
      }
    }
  }

  > span {
    ${textXsMedium}
    color: ${theme.colors.gray[500]};
    line-height: 80%;
  }
`

export const PlanItemBody = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;

  @media (max-width: 740px) {
    display: grid;
    grid-template-columns: 1fr 0.7fr 1fr;
    margin-bottom: 18px;
    gap: 8px 4px;
  }

  @media (max-width: 537px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 4px;
  }

  @media (max-width: 430px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 4px;
  }

  li {
    ${textSmRegular}
    display: flex;
    align-items: center;
    color: ${theme.colors.gray[600]};
    gap: 4px;

    @media (max-width: 740px) {
      ${textXsMedium}
    }

    strong {
      font-weight: 500;
    }

    &.disabled {
      color: ${theme.colors.gray[300]};
    }
  }
`

export const PlanItemSelected = styled.span`
  ${textX1sMedium}
  position: absolute;
  left: 50%;
  bottom: -13px;
  transform: translateX(-50%);
  border-radius: 12px;
  background-color: ${theme.colors.blue[400]};
  color: ${theme.colors.white};
  padding: 4px 12px;

  @media (max-width: 740px) {
    top: 80px;
    bottom: unset;
  }
`

export const PlanItemContent = styled.li`
  padding: 24px;
  background-color: ${theme.colors.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 24px;
  position: relative;

  @media (max-width: 850px) {
    width: 100%;
  }

  @media (max-width: 740px) {
    padding: 18px;
  }

  &:not(.popular) {
    padding: 18px;
  }

  &:first-child {
    padding-right: 28px;
    border-radius: 24px 0 0 24px;
    margin-right: -10px;

    @media (max-width: 740px) {
      padding: 18px 18px 32px;
      border-radius: 24px;
      margin: 0 0 -20px;
    }
  }

  &:last-child {
    padding-left: 28px;
    border-radius: 0 24px 24px 0;
    margin-left: -10px;

    @media (max-width: 740px) {
      padding: 32px 18px 18px;
      border-radius: 24px;
      margin: -20px 0 0;

      ${PlanItemSelected} {
        top: 95px;
      }
    }
  }

  &.popular {
    z-index: 1;
    background-color: ${theme.colors.primary[400]};

    ${PlanItemIllustration} {
      box-shadow: 0 0 20px 0 rgba(255, 0, 150, 0.7);
      border: 3px solid ${theme.colors.primary[600]}
    }

    ${PlanItemHeader} {
      border-bottom-color: ${theme.colors.primary[500]};
    }

    ${PlanItemHeaderTexts} {
      > h4 {
        color: ${theme.colors.gray[100]};
        justify-content: space-between;
        align-items: center;
        display: flex;

        span {
          ${textX1sBold}
          background-color: ${theme.colors.white};
          border-radius: 12px;
          color: ${theme.colors.primary[400]};
          padding: 1px 8px;
          position: absolute;
          top: 14px;
          right: 14px;
        }
      }

      > h5 {
        color: ${theme.colors.white};

        &::after {
          background-color: ${theme.colors.primary[100]};
        }
      }

      span {
        color: ${theme.colors.primary[100]};
      }
    }

    ${PlanItemBody} li {
      color: ${theme.colors.gray[100]};

      strong {
        color: ${theme.colors.gray[100]};
      }
    }
  }

  ${ButtonComponent} {
    width: 100%;
  }
`