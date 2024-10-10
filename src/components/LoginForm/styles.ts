'use client'

// Libraries
import styled, { css } from "styled-components";

// Theme
import { theme } from "@/theme/globalStyles";
import { ButtonComponent } from "../Button/styles";
import {
  displaySmBold,
  textSmRegular,
  textXsRegular,
} from "@/theme/typography";

export const LoginModalContent = styled.div<{ active: boolean }>`
  ${({ active }) => css`
    position: fixed;
    height: 100%;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${active ? 1 : 0};
    pointer-events: ${active ? 'all' : 'none'};
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

  > h3 {
    ${displaySmBold}
    color: ${theme.colors.primary[400]};
    margin-top: 28px;
    margin-bottom: 6px;
  }

  > p {
    ${textSmRegular}
    color: ${theme.colors.gray[600]};
    max-width: 300px;
    margin: 0 auto 36px;
  }
`

export const LoginModalMethods = styled.ul`
  display: flex;
  gap: 14px;

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
  }
`

export const AlreadyLogin = styled.button`
  ${textXsRegular}
  color: ${theme.colors.gray[400]};
  margin-top: 8px;
  width: 100%;
  text-align: right;
  cursor: pointer;

  strong {
    color: ${theme.colors.primary[400]};
  }

  &:hover {
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
`

export const LoginModalIllustration = styled.div`
  width: 100%;
  height: 135px;

  img {
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`