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
      return '32px';
    case 'lg':
      return '48px';
    case 'xl':
      return '64px';
  }
}

export const LoadingContent = styled.div<Pick<LoadingProps, 'size'>>`
  ${({ size = 'sm' }) => css`
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
      border: 2px solid ${theme.colors.white};
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