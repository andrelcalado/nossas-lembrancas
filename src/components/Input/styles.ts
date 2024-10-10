// Libraries
import styled from "styled-components";

// Theme
import { theme } from "@/theme/globalStyles";

export const InputContent = styled.label`
  display: flex;
  gap: 8px;
  width: 100%;
  padding: 0 12px;
  background-color: ${theme.colors.gray[100]};
  border-radius: 12px;
  border: 1px solid ${theme.colors.gray[200]};
  align-items: center;

  input {
    padding: 12px 0;
    width: 100%;
    background: unset;
    border: unset;
    stroke: unset;
    outline: unset;
    color: ${theme.colors.black};

    &::placeholder {
      color: ${theme.colors.gray[300]};
    }
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
    
    &:hover {
      svg {
        color: ${theme.colors.secondary[400]};
      }
    }
  }
`