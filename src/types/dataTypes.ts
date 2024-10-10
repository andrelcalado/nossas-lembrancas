// Core
import React from "react";

// Types
import { HeroSliderCardProps } from "./layoutTypes";

export type HeroSliderDataType = Array<HeroSliderCardProps>

export type FooterSocialMediaType = {icon: JSX.Element, url: string }

export interface ProvidersWrapperContext {
  loginModal: boolean;
  setLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
}