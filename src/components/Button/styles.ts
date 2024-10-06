'use client'

// Core
import Link from "next/link";
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

const getVariationnSize = (variation?: ButtonVariationENUM) => {
  switch (variation) {
    case 'fill':
    default:
      return css`
        background-color: ${theme.colors.primary[400]};
        color: ${theme.colors.white};

        &:hover {
          background-color: ${theme.colors.primary[300]};
        }
      `;
    case 'border':
      return css`
        background-color: transparent;
        border: 1px solid ${theme.colors.primary[400]};
        color: ${theme.colors.primary[400]};

        &:hover {
          background-color: ${theme.colors.primary[400]};
          color: ${theme.colors.white};
        }
      `;
  }  
}

export const ButtonComponent = styled(Link)<Pick<ButtonProps, 'size' | 'variation'>>`
  ${({ size, variation }) => css`
    ${textSmMedium}
    padding: ${getPaddingSize(size)};
    text-align: center;
    border-radius: 8px;
    align-items: center;
    display: flex;
    gap: 6px;
    ${getVariationnSize(variation)}

    @media (max-width: 910px) {
      padding: 9px 17px;
    }

    & svg {
      width: 15px;
    }
  `}
`;
