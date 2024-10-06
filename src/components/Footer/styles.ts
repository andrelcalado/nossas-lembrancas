'use client'

// Libraries
import styled from "styled-components";

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

  > img {
    max-height: 50px;
    width: fit-content;
  }
`

export const FooterBottomContent = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: 16px;
  color: ${theme.colors.gray[200]};
  ${textXsRegular}
`

export const FooterSocialMedia = styled.ul`
  display: flex;
  gap: 8px;

  li {
    list-style: none;
    flex-shrink: 0;
  }
`
