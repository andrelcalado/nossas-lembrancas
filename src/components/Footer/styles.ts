'use client'

// Libraries
import styled from "styled-components";

// Styles
import { SocialButtonContent } from "../SocialButton/styles";

// Theme
import { theme } from "@/theme/globalStyles";
import { textXsRegular } from "@/theme/typography";

export const FooterContent = styled.footer`
  background-color: ${theme.colors.primary[400]};
  position: relative;

  &::before, &::after {
    content: '';
    width: 30px;
    height: 30px;
    top: -30px;
    position: absolute;
    background: url("/assets/img/footer-round.svg") no-repeat center;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
    transform: scale(-1) rotate(90deg);
  }
`

export const FooterContainer = styled.div`
  display: block;
`

export const FooterTopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0 12px;
  width: 100%;

  @media (max-width: 1024px) {
    padding: 24px 0;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 24px;
  }

  > img {
    max-height: 50px;
    width: fit-content;

    @media (max-width: 1024px) {
      max-height: 40px;
    }
  }
`

export const FooterBottomContent = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: 16px;
  color: ${theme.colors.gray[200]};
  ${textXsRegular}

  @media (max-width: 500px) {
    max-width: 300px;
    margin: 0 auto;    
  }
`

export const FooterSocialMedia = styled.ul`
  display: flex;
  gap: 8px;

  li {
    list-style: none;
    flex-shrink: 0;

    @media (max-width: 500px) {
      ${SocialButtonContent} {
        height: 40px;
        width: 40px;
      }      
    }
  }
`
