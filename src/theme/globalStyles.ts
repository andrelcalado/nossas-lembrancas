// Core
import styled from "styled-components";

// Types
import { Theme } from "@/types/layoutTypes";

export const theme: Theme = {
  colors: {
    white: "#FAFAFA",
    black: "#121212",
    gray: {
      100: '#faf4f7',
    },
    secondary: {
      100: '#DDBAD6',
      200: '#DDA2D2',
      300: '#DD8CCD',
      400: '#E05EC4',
      500: '#B64C9F',
      600: '#943E81',
      700: '#723064'
    },
    primary: {
      100: '#E0A6C3',
      200: '#E073AA',
      300: '#E2478E',
      400: '#E31E6F',
      500: '#B8185B',
      600: '#96144A',
      700: '#740F39'      
    }
  }
};

export const Container = styled.div`
  max-width: calc(1300px - 80px);
  padding: 0 40px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 500px) {
    max-width: calc(1300px - 40px);
    padding: 0 20px;
  }
`;
