// Libraries
import styled, { css } from "styled-components";

// Types
import { PlansModalProps } from "@/types/layoutTypes";
import { theme } from "@/theme/globalStyles";
import { ButtonComponent } from "../Button/styles";
import {
  displayMdBold,
  textLgBold,
  textSmMedium,
  textSmRegular,
  textX1sBold,
  textX1sMedium,
  textXsMedium,
} from "@/theme/typography";

export const PlansModalContent = styled.div<Pick<PlansModalProps, 'openPlansModal'>>`
  ${({ openPlansModal }) => css`
    position: fixed;
    height: 100%;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999999;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${openPlansModal ? 1 : 0};
    pointer-events: ${openPlansModal ? 'all' : 'none'};
    padding: 24px;
  `}
`;

export const PlansModalWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: ${theme.colors.secondary[100]};
  max-height: calc(100vh - 24px);
  border-radius: 12px;
  padding: 32px 24px;
  position: relative;
  overflow: scroll;
  z-index: 1;

  &::-webkit-scrollbar {
    display: none;
  }

  > h2 {
    ${displayMdBold}
    text-align: center;
    max-width: 420px;
    margin: 0 auto 8px;
    color: ${theme.colors.black};
    line-height: 98%;

    strong {
      color: ${theme.colors.primary[400]};
    }
  }

  > p {
    ${textSmRegular}
    color: ${theme.colors.gray[700]};
    text-align: center;
    max-width: 400px;
    margin: 0 auto;
  }
`;

export const PlansList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PlanItemHeader = styled.div`
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid ${theme.colors.gray[200]};
  align-items: center;
  display: flex;
  gap: 12px;
`

export const PlanItemIllustration = styled.div`
  width: 71px;
  height: 71px;
  border-radius: 12px;
  overflow: hidden;

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

    &::after {
      content: '';
      width: 40%;
      position: absolute;
      right: -3px;
      bottom: 12px;
      height: 1px;
      background-color: ${theme.colors.gray[400]};
      transform: rotate(7deg);
    }

    span {
      font-size: 10px;
      color: ${theme.colors.gray[500]};
      line-height: 90%;
      font-weight: 500;
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

  li {
    ${textSmRegular}
    display: flex;
    align-items: center;
    color: ${theme.colors.gray[600]};
    gap: 4px;

    strong {
      font-weight: 500;
    }

    &.disabled {
      color: ${theme.colors.gray[300]};
    }
  }
`

export const PlanItem = styled.li`
  padding: 24px;
  background-color: ${theme.colors.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 24px;
  position: relative;

  &:not(.popular) {
    padding: 18px;
  }

  &:first-child {
    padding-right: 28px;
    border-radius: 24px 0 0 24px;
    margin-right: -10px;
  }

  &:last-child {
    padding-left: 28px;
    border-radius: 0 24px 24px 0;
    margin-left: -10px;
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
`

export const PlansPromotion = styled.div`
  margin: 8px 0;
  width: 100%;
  height: 100px;
  overflow: hidden;
  border-radius: 12px;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`