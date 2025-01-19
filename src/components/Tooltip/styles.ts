// Libraries
import styled, { css } from "styled-components";

// Theme
import { theme } from "@/theme/globalStyles";
import { textXsRegular } from "@/theme/typography";

export const TooltipContent = styled.div<{ active : boolean }>`
${({ active }) => css`
  position: absolute;
  bottom: ${active ? '120%' : '70%'};
  left: 50%;
  padding: 3px 12px;
  transform: translateX(-50%);
  background: ${theme.colors.blue[700]};
  color: ${theme.colors.white};
  ${textXsRegular}
  width: max-content;
  border-radius: 4px;
  opacity: ${active ? 1 : 0};
  pointer-events: none;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    background: ${theme.colors.blue[700]};
    transform: translateX(-50%) rotate(45deg);
    border-radius: 1px;
    position: absolute;
    left: 50%;
    top: 82%;
  }
`}
`