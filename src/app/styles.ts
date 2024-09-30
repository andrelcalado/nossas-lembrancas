'use client'

// Core
import styled, { css } from "styled-components";

export const Title = styled.h1`
  font-size: 2.5em;
  font-weight: 500;
  line-height: 1.2;
  margin: 0 0 0.5em 0;
  color: red;
`;

export const HomeContent = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors?.gray[100]};
  `}
`;