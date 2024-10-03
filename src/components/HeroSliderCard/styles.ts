// Libraries
import styled from "styled-components";

// Theme
import { theme } from "@/theme/globalStyles";
import { textLgBold, textLgRegular, textMdRegular } from "@/theme/typography";

export const HeroSliderCardContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.white};
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 12px;

  > h4 {
    margin-top: 12px;
    max-width: 300px;
    ${textMdRegular}
    font-style: italic;
    text-align: center;
    color: ${theme.colors.gray[700]}
  }
`

export const HeroSliderDate = styled.p`
  position: absolute;
  top: -15px;
  right: -20px;
  padding: 12px;
  border-radius: 12px;
  background-color: ${theme.colors.gray[100]};
  color: ${theme.colors.gray[700]};
  ${textLgBold}
  letter-spacing: 1px;
  box-shadow: 0 0 20px 0 #00000033;
`

export const HeroSliderCardPhoto = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 12px 12px 0 0;

  img {
    height: 100%;
    width: 100%;
    max-width: unset;
    object-fit: cover;
  }
`
