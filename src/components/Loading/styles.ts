// Libraries
import styled, { css } from "styled-components";

// Theme
import { theme } from "@/theme/globalStyles";

// Types
import { ElementSizeENUM, LoadingProps } from "@/types/layoutTypes";

const getSize = (size: ElementSizeENUM) => {
  switch (size) {
    case 'xs':
      return '20px';
    case 'sm':
    default:
      return '24px';
    case 'md':
      return '56px';
    case 'lg':
      return '78px';
    case 'xl':
      return '104px';
  }
}

const getColor = ({ color }: Pick<LoadingProps, 'color'>) => {
  switch (color) {
    case 'primary':
      return theme.colors.primary[400];
      default:
      return theme.colors.white;
  }  
}

export const LoadingContent = styled.div<Pick<LoadingProps, 'size' | 'color'>>`
  ${({ size = 'sm', color = 'white' }) => css`
    width: ${getSize(size)};
    height: ${getSize(size)};
    display: inline-block;
    position: relative;

    &::after,
    &::before {
      content: '';  
      box-sizing: border-box;
      width: ${getSize(size)};
      height: ${getSize(size)};
      border-radius: 50%;
      border: 2px solid ${getColor({ color })};
      position: absolute;
      left: 0;
      top: 0;
      animation: animloader 2s linear infinite;
    }

    &::after {
      animation-delay: 1s;
    }
  `}
`

export const LoadingScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.gray[100]};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999999;

  > img {
    max-width: 80px;
    animation: breathing .8s ease-in-out alternate-reverse infinite;
  }
`