'use client'

// Core
import styled from "styled-components";

// Libraries
import { Swiper } from "swiper/react";

// Styles
import {
  HeroSliderDate,
  HeroSliderDescription  
} from "@/components/HeroSliderCard/styles";

// Theme
import { theme } from "@/theme/globalStyles";
import {
  displayLgRegular,
  displayX1Regular,
  textMdRegular,
  textSmRegular
} from "@/theme/typography";

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
  padding: 56px 0 86px;

  @media (max-width: 800px) {
    padding: 36px 0 48px;
  }

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

  @media (max-width: 1024px) {
    gap: 80px;
  }

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    gap: 0;
  }

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

  @media (max-width: 800px) {
    justify-content: center;
  }

  li {
    list-style: none;

    &:first-child {
      ${ButtonComponent} {
        padding: 10px 38px;

        @media (max-width: 1024px) {
          padding: 10px 20px;
        }
      }
    }
  }
`;

export const HomeTexts = styled.div`
  max-width: 650px;

  @media (max-width: 800px) {
    max-width: 450px;
    z-index: 10;
    margin-top: -70px;
  }

  h1 {
    ${displayX1Regular}
    color: ${theme.colors.black};
    text-transform: uppercase;
    margin-bottom: 8px;

    @media (max-width: 1024px) {
      ${displayLgRegular}
    }

    @media (max-width: 800px) {
      font-size: 33px;
      line-height: 105%;
      text-align: center;
    }

    strong {
      color: ${theme.colors.primary[400]};
    }
  }

  p {
    ${textMdRegular}
    color: ${theme.colors.gray[700]};
    max-width: 500px;

    @media (max-width: 1024px) {
      max-width: 450px;
    }

    @media (max-width: 800px) {
      ${textSmRegular}
      text-align: center;
    }
  }
`

export const HomeHeroSlider = styled(Swiper)`
  position: relative;
  width: 400px;
  height: 500px;
  margin: 0 40px 0 0;

  @media (max-width: 1024px) {
    width: 300px;
    height: 420px;
  }

  @media (max-width: 800px) {
    width: 250px;
    height: 370px;
    position: relative;
    margin: 0;

    &::before {
      content: '';
      width: 150%;
      height: 300px;
      position: absolute;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #dfced7 85%);
      transform: translateX(-50%);
      z-index: 5;
      bottom: -1px;
      left: 50%;
    }
  }

  .swiper-slide {
    overflow: unset;

    &.swiper-slide-active {
      ${HeroSliderDate}, ${HeroSliderDescription} {
        opacity: 1;
        pointer-events: all;

        p, time {
          @media (max-width: 1024px) {
            font-size: 14px;
          }
        }
      }
    }

    &-shadow {
      border-radius: 12px;
      background-color: rgba(255, 255, 255, .6);
    }

    @media (max-width: 800px) {
      ${HeroSliderDescription} {
        display: none;
      }      
    }
  }
`