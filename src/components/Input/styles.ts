// Libraries
import styled, { css } from "styled-components";

// Theme
import { theme } from "@/theme/globalStyles";

// Types
import { InputProps } from "@/types/layoutTypes";

export const InputContent = styled.label<Pick<InputProps, 'error'>>`
  ${({ error = false}) => css`
    display: flex;
    gap: 8px;
    width: 100%;
    padding: 0 12px;
    background-color: ${theme.colors.gray[100]};
    border-radius: 12px;
    border: 1px solid ${error ? theme.colors.primary[500] : theme.colors.gray[200]};
    align-items: center;
    position: relative;

    &:hover, &:focus-within {
      border-color: ${theme.colors.secondary[300]};
    }

    input, textarea {
      padding: 12px 0;
      width: 100%;
      background: unset;
      border: unset;
      stroke: unset;
      outline: unset;
      color: ${error ? theme.colors.primary[500] : theme.colors.black};

      &::placeholder {
        color: ${error ? theme.colors.primary[500] : theme.colors.gray[300]};
      }

      @media (max-width: 600px) {
        font-size: 16px;        
      }
    }

    textarea {
      resize: none;
    }

    svg {
      color: ${theme.colors.secondary[200]};
      flex-shrink: 0;
    }

    button {
      flex-shrink: 0;
      background: unset;
      border: unset;
      stroke: unset;
      outline: unset;
      height: 20px;
      cursor: pointer;
      
      &:hover, &:focus-visible, &:focus-within {
        svg {
          color: ${theme.colors.secondary[500]};
        }
      }
    }
  `}
`

export const InputIconFloating = styled.div`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  pointer-events: none;
  background-color: ${theme.colors.gray[100]};
  height: fit-content;
  width: 18px;
  height: 18px;

  svg {
    width: 100%;
    height: 100%;
  }
`