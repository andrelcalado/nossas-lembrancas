'use client'

// Core
import styled from "styled-components";

// Theme
import { theme } from "@/theme/globalStyles";

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

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.gray[100]};
    border-radius: 24px 24px 0 0;
  }
`;