'use client'

// Core
import styled, { css } from "styled-components";

// Theme
import { theme } from "../../theme/globalStyles";

// Typography
import { textSmMedium } from "../../theme/typography";

// Types
import { ButtonProps, ButtonVariationENUM, ElementSizeENUM } from "@/types/layoutTypes";

const getPaddingSize = (size?: ElementSizeENUM) => {
  switch (size) {
    case 'xl':
      return '16px 20px';
    case 'lg':
      return '14px 20px';
    default:
    case 'md':
      return '12px 20px';
    case 'sm':
      return '10px 20px';
    case 'xs':
      return '8px 20px';
  }
}

const getVariationStyle = (disabled: boolean, variation?: ButtonVariationENUM) => {
  switch (variation) {
    case 'fill':
    default:
      return css`
        background-color: ${disabled ? theme.colors.primary[200] : theme.colors.primary[400]};
        border: 1px solid transparent;
        color: ${theme.colors.white};

        &:hover {
          background-color: ${theme.colors.primary[300]};
        }
      `;
    case 'fill-blue':
      return css`
        background-color: ${disabled ? theme.colors.blue[200] : theme.colors.blue[500]};
        border: 1px solid transparent;
        color: ${theme.colors.white};

        &:hover {
          background-color: ${theme.colors.blue[400]};
        }
      `;
    case 'border':
      return css`
        background-color: ${disabled ? theme.colors.primary[100] : 'transparent'};
        border: 1px solid ${disabled ? theme.colors.primary[200] : theme.colors.primary[400]};
        color: ${theme.colors.primary[400]};

        &:hover {
          background-color: ${theme.colors.primary[400]};
          color: ${theme.colors.white};
        }
      `;
  }  
}

export const ButtonComponent = styled.button<Pick<ButtonProps, 'size' | 'variation' | 'disabled'>>`
  ${({ size, variation = 'fill', disabled = false }) => css`
    ${textSmMedium}
    padding: ${getPaddingSize(size)};
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 8px;
    display: flex;
    gap: 6px;
    ${getVariationStyle(disabled, variation)}
    cursor: pointer;
    ${disabled && 'pointer-events: none;'}

    @media (max-width: 910px) {
      padding: 9px 17px;
    }

    & svg {
      width: 15px;
      flex-shrink: 0;
    }
  `}
`;
