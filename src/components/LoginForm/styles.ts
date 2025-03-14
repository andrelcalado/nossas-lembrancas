'use client'

// Libraries
import styled, { css } from "styled-components";
import PhoneInput from 'react-phone-number-input'

// Theme
import { theme } from "@/theme/globalStyles";
import { ButtonComponent } from "../Button/styles";
import {
  displaySmBold,
  displayXsBold,
  textSmRegular,
  textX1sMedium,
  textXsRegular,
} from "@/theme/typography";

export const LoginModalContent = styled.div<{ active: boolean }>`
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
    padding: 24px;
  `}
`

export const ModalOverlay = styled.div`
  background-color: ${theme.colors.white};
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1;
`

export const LoginModalWrapper = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 12px;
  z-index: 2;
  width: 100%;
  max-width: 450px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 50px rgba(0, 0, 0, .2);
`

export const LoginModalContainer = styled.div`
  padding: 24px;
  width: 100%;
  text-align: center;

  @media (max-width: 600px) {
    padding: 16px;    
  }

  > h3 {
    ${displaySmBold}
    color: ${theme.colors.primary[400]};
    margin-top: 28px;
    margin-bottom: 6px;

    @media (max-width: 600px) {
      ${displayXsBold}
      margin-bottom: 4px;
    }
  }

  > p {
    ${textSmRegular}
    color: ${theme.colors.gray[600]};
    max-width: 300px;
    margin: 0 auto 36px;

    @media (max-width: 600px) {
      ${textXsRegular}
      margin-bottom: 20px;
      max-width: 250px;
    }
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`

export const LoginModalMethods = styled.ul`
  display: flex;
  gap: 14px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 8px;
  }

  li {
    width: 100%;
    
    ${ButtonComponent} {
      width: 100%;

      svg {
        width: 20px;
        height: 20px;
        transition: .2s ease-in-out;
      }
    }
  }
`

export const LoginModalMethodsSeparator = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0;

  @media (max-width: 600px) {
    margin: 10px 0;
  }

  &::before {
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.gray[200]};
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 50%;
  }

  span {
    display: block;
    background-color: ${theme.colors.white};
    ${textXsRegular}
    width: fit-content;
    text-align: center;
    position: relative;
    padding: 0 10px;
    color: ${theme.colors.gray[500]};
  }
`

export const LoginWithEmailForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > ${ButtonComponent} {
    margin-top: 8px;

    @media (max-width: 600px) {
      margin: 0;      
    }
  }
`

export const ErrorMessage = styled.span`
  ${textX1sMedium}
  display: block;
  color: ${theme.colors.primary[500]};
  text-align: left;
`

export const AlreadyLogin = styled.button`
  ${textXsRegular}
  color: ${theme.colors.gray[400]};
  margin-top: 8px;
  width: 100%;
  text-align: right;
  cursor: pointer;

  @media (max-width: 600px) {
    margin: 0;
    font-size: 11px;
  }

  strong {
    color: ${theme.colors.primary[400]};
  }

  &:hover, &:focus-visible, &:focus-within {
    strong {
      color: ${theme.colors.primary[200]};
    }
  }
`

export const CloseButton = styled(ButtonComponent)`
  border-radius: 100%;
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  @media (max-width: 600px) {
    top: 8px;
    right: 8px;
  }
`

export const LoginModalIllustration = styled.div`
  width: 100%;
  height: 135px;

  @media (max-width: 600px) {
    height: 60px;
  }

  img {
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`

export const PhoneInputComponent = styled(PhoneInput)`
  width: 100%;
  padding: 0 12px;
  background-color: ${theme.colors.gray[100]};
  border-radius: 12px;
  border: 1px solid ${theme.colors.gray[200]};
  gap: 3px;

  .PhoneInputCountrySelectArrow {
    margin-left: 12px;
  }

  input {
    padding: 12px 0;
    width: 100%;
    background: unset;
    border: unset;
    stroke: unset;
    outline: unset;
    color: ${theme.colors.black};

    @media (max-width: 600px) {
      font-size: 16px;
    }

    &::placeholder {
      color: ${theme.colors.gray[300]};
    }
  }
`

export const BottomButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  width: 100%;

  ${ButtonComponent}:last-child {
    svg {
      transform: rotate(-45deg);
    }
  }
`