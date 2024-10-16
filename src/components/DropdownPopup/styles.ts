// Libraries
import styled, { css } from "styled-components";

// Theme
import { theme } from "@/theme/globalStyles";

// Types
import { DropdownProps, ElementsPositionType } from "@/types/layoutTypes";
import { textSmRegular } from "@/theme/typography";

const getDropdownPosition = (position: ElementsPositionType, openDropdown: boolean) => {
  switch (position) {
    default:
    case 'top':
      return css`
        top: ${openDropdown ? '-100%' : '-95%'};
        left: 50%;
        transform: translateX(-50%);
      `;
    case 'center':
      return css`
        top: ${openDropdown ? '50%' : '45%'};
        left: 50%;
        transform: translate(-50%, -50%);
      `;
    case 'bottom':
      return css`
        bottom: ${openDropdown ? '-100%' : '-95%'};
        left: 50%;
        transform: translateX(-50%);
      `;
  }  
}

export const DropdownPopupContent = styled.ul<Pick<DropdownProps, 'openDropdown' | 'position'>>`
  ${({ openDropdown, position }) => css`
    position: absolute;
    ${getDropdownPosition(position, openDropdown)}
    width: 250px;
    background-color: ${theme.colors.white};
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
    flex-direction: column;
    border-radius: 12px;
    display: flex;
    padding: 12px;
    gap: 8px;
    z-index: 5;
    ${!openDropdown && 'pointer-events: none;'}
    opacity: ${openDropdown ? 1 : 0};
  `}
`

export const DropdownPopupItem = styled.button<{ disabled?: boolean }>`
  ${({ disabled }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
    background-color: ${disabled ? theme.colors.gray[200] : 'transparent'};
    border-radius: 12px;
    padding: 12px;
    gap: 8px;
    width: 100%;
    cursor: pointer;
    ${disabled && 'pointer-events: none;'}

    > span {
      display: block;
      ${textSmRegular}
      color: ${disabled ? theme.colors.gray[400] : theme.colors.primary[500]};
    }
    
    svg {
      color: ${disabled ? theme.colors.gray[400] : theme.colors.primary[500]};
    }

    &:hover {
      background-color: ${theme.colors.primary[400]};

      > span {
        color: ${theme.colors.white};
      }

      svg {
        color: ${theme.colors.white};
      }
    }
  `}
`