'use client'

// Core
import styled from "styled-components";

// Theme
import { theme } from "@/theme/globalStyles";
import { Swiper } from "swiper/react";

export const Title = styled.h1`
  font-size: 2.5em;
  font-weight: 500;
  line-height: 1.2;
  margin: 0 0 0.5em 0;
  color: red;
`;

export const HomeContent = styled.section`
  background-color: ${theme.colors.white};
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;

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
`;

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HomeCTAs = styled.ul`
  margin: 0;

  li {
    list-style: none;
  }
`;

export const HomeTexts = styled.div`
  max-width: 680px;
`

export const HomeHeroSlider = styled(Swiper)`
  position: relative;
  width: 400px;
  height: 550px;

  .swiper-slide {
    overflow: unset;
  }
`