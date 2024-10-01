'use client'

// Core
import Link from "next/link";
import styled from "styled-components";

// Theme
import { theme } from "../../theme/globalStyles";

// Typography
import { textSmMedium } from "../../theme/typography";

// Types
import { ButtonProps, ElementSizeENUM } from "@/types/layoutTypes";

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

export const ButtonComponent = styled(Link)<Pick<ButtonProps, 'size'>>`
  ${textSmMedium}
  padding: ${({ size }) => getPaddingSize(size)};
  background-color: ${theme.colors.primary[400]};
  color: ${theme.colors.white};
  text-align: center;
  border-radius: 8px;
  align-items: center;
  display: flex;
  gap: 6px;

  @media (max-width: 910px) {
    padding: 9px 17px;
  }

  & svg {
    width: 15px;
  }

  &:hover {
    background-color: ${theme.colors.primary[300]};
  }
`;
