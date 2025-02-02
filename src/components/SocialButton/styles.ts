'use client'

// Theme
import { theme } from "@/theme/globalStyles"

// Core
import Link from "next/link"

// Libraries
import styled from "styled-components"

export const SocialButtonContent = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.secondary[700]};
  backdrop-filter: blur(15px);
  border-radius: 100%;
  height: 45px;
  width: 45px;
  transition: .3s ease-in-out;
  
  svg, img {
    max-width: 45px;
    max-height: 16px;
    width: 100%;
    color: ${theme.colors.white};
  }

  &:hover {
    background-color: ${theme.colors.secondary[600]};
  }
`