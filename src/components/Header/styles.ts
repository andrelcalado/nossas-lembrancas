'use client'

// Core
import styled from "styled-components";

// Theme
import { theme } from "@/theme/globalStyles";

export const HeaderContent = styled.header`
  background-color: ${theme.colors.white};
  position: sticky;
  width: 100%;
  left: 0;
  top: 0;
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 18px;
  padding-bottom: 18px;

  > img {
    max-height: 40px;
    width: fit-content;
  }
`
export const HeaderButtons = styled.ul`
  display: flex;
  gap: 8px;

  li {
    list-style: none;
  }
`