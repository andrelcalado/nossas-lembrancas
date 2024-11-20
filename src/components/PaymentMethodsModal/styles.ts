'use client'

// Libraries
import styled, { css } from "styled-components";

// Theme
import { theme } from "@/theme/globalStyles";
import {
  displayLgBold,
  displaySmBold,
  textLgBold,
  textSmRegular,
  textXsRegular,  
} from "@/theme/typography";
import { PlanItemBody, PlanItemContent } from "../PlanItem/styles";
import { ButtonComponent } from "../Button/styles";

export const PaymentMethodsModalContent = styled.div<{ active: boolean }>`
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
    padding: 12px;
	`}
`

export const PaymentMethodsModalWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  background-color: ${theme.colors.secondary[100]};
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  max-height: calc(100svh - 24px);
  overflow: scroll;

  @media (max-width: 537px) {
    padding: 24px 12px
  }

  &::-webkit-scrollbar {
    display: none;
  }

  > h3 {
    ${displayLgBold}
    text-align: center;
    max-width: 420px;
    margin-bottom: 8px;
    color: ${theme.colors.black};
    line-height: 98%;

    @media (max-width: 537px) {
      ${displaySmBold}
      line-height: 95%;
      max-width: 320px;
    }

    strong {
      color: ${theme.colors.primary[400]};
    }
  }

  > p {
    ${textSmRegular}
    color: ${theme.colors.gray[700]};
    text-align: center;
    max-width: 550px;
    margin-bottom: 8px;

    @media (max-width: 537px) {
      ${textXsRegular}
      max-width: 400px;
    }
  }
`

export const PaymentMethodsWithPlan = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  align-items: flex-start;
  width: 100%;
  gap: 56px;

  @media (max-width: 740px) {
    flex-direction: column-reverse;
    align-items: center;
  }

  @media (max-width: 537px) {
    gap: 32px;    
  }

  &::after {
    content: '';
    height: 60%;
    width: 1px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: ${theme.colors.primary[100]};
    left: 51%;

    @media (max-width: 740px) {
      width: 60%;
      height: 1px;
      top: 45%;
    }

    @media (max-width: 537px) {
      top: 40%;
    }
  }

  ${PlanItemContent} {
    border-radius: 24px;
    width: 100%;
    max-width: 270px;
    margin: 0;

    ${PlanItemBody} {
      margin: 0;

      @media (max-width: 537px) {
        margin-top: 20px;
      }
    }

    @media (max-width: 740px) {
      max-width: 100%;
      padding: 18px;
    }

    @media (max-width: 537px) {
      padding: 12px;
    }
  }
`

export const PaymentMethods = styled.div`
  width: 100%;
  max-width: 240px;
  padding: 18px;
  border-radius: 24px;
  background-color: ${theme.colors.white};

  > h3 {
    ${textLgBold}
    width: 100%;
    text-align: center;
    color: ${theme.colors.primary[400]};
    margin-bottom: 12px;
  }

  ${ButtonComponent} {
    width: 100%;

    &:last-child {
      margin-top: 8px;
    }

    svg, img {
      width: 20px;
      height: 20px;
    }
  }
`