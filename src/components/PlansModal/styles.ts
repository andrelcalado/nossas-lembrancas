// Libraries
import styled, { css } from "styled-components";

// Types
import { PlansModalProps } from "@/types/layoutTypes";
import { theme } from "@/theme/globalStyles";
import {
  displayMdBold,
  displayXsBold,
  textSmRegular,
  textXsRegular,
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

    @media (max-width: 430px) {
      padding: 8px;
    }
  `}
`;

export const PlansModalWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: ${theme.colors.secondary[100]};
  max-height: calc(100svh - 24px);
  border-radius: 12px;
  padding: 32px 24px;
  position: relative;
  overflow: scroll;
  z-index: 1;

  @media (max-width: 430px) {
    padding: 42px 12px 28px;    
  }

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

    @media (max-width: 600px) {
      ${displayXsBold}
      line-height: 95%;
      max-width: 300px;
    }

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

    @media (max-width: 600px) {
      ${textXsRegular}
      max-width: 300px;
    }
  }
`;

export const PlansList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 740px) {
    flex-direction: column;
  }
`

export const PlansPromotion = styled.div`
  margin: 8px 0;
  width: 100%;
  height: 100px;
  overflow: hidden;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    &.mobile {
      display: none;
    }

    @media (max-width: 570px) {
      &.desktop {
        display: none;
      }

      &.mobile {
        display: block;
      }      
    }
  }
`