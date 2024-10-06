'use client'

// Core
import styled from "styled-components";

// Libraries
import { Swiper } from "swiper/react";

// Styles
import {
  HeroSliderCardPhoto,
  HeroSliderDate,
  HeroSliderDescription  
} from "@/components/HeroSliderCard/styles";

// Theme
import { theme } from "@/theme/globalStyles";
import { displayX1Regular, textMdRegular } from "@/theme/typography";

// Components
import { ButtonComponent } from "@/components/Button/styles";

export const HomeContent = styled.section`
  background-color: ${theme.colors.white};
  position: relative;
  min-height: calc(100vh - 76px);
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-top: 76px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.gray[200]};
    border-radius: 24px 24px 0 0;
  }

  &::after {
    content: "";
    background-color: transparent;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: 182px;
    opacity: 0.3;
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 24px 24px 0 0;
  }
`;

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7vw;

  &::before, &::after {
    content: '';
    width: 200px;
    height: 200px;
    position: absolute;    
    border-radius: 100%;
    filter: blur(150px);
    z-index: -1;
  }

  &::before {
    background-color: ${theme.colors.primary[400]};
    left: 100px;
    top: 50px;
    opacity: .5;
  }

  &::after {
    background-color: ${theme.colors.secondary[400]};
    bottom: -50px;
    left: 50%;
  }
`

export const HomeCTAs = styled.ul`
  margin-top: 24px;
  display: flex;
  gap: 12px;

  li {
    list-style: none;

    &:first-child {
      ${ButtonComponent} {
        padding: 10px 38px;
      }
    }
  }
`;

export const HomeTexts = styled.div`
  max-width: 650px;

  h1 {
    ${displayX1Regular}
    color: ${theme.colors.black};
    text-transform: uppercase;
    margin-bottom: 8px;

    strong {
      color: ${theme.colors.primary[400]};
    }
  }

  p {
    ${textMdRegular}
    color: ${theme.colors.gray[700]};
    max-width: 500px;
  }
`

export const HomeHeroSlider = styled(Swiper)`
  position: relative;
  width: 400px;
  height: 500px;
  margin: 0;

  .swiper-slide {
    overflow: unset;

    &.swiper-slide-active {
      ${HeroSliderDate}, ${HeroSliderDescription} {
        opacity: 1;
        pointer-events: all;
      }

      ${HeroSliderCardPhoto} img {
        animation: sizeGrown 15s ease;
      }
    }

    &-shadow {
      border-radius: 12px;
      background-color: rgba(255, 255, 255, .6);
    }
  }
`