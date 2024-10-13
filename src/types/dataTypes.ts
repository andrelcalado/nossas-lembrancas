// Core
import React from "react";

// Types
import { HeroSliderCardProps } from "./layoutTypes";
import { User } from "firebase/auth";

export type HeroSliderDataType = Array<HeroSliderCardProps>

export type FooterSocialMediaType = {icon: JSX.Element, url: string }

export interface ProvidersWrapperContext {
  loginModal: boolean;
  setLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
  loginMode: boolean;
  setLoginMode: React.Dispatch<React.SetStateAction<boolean>>;
  handleUserSignOut: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  user: User | null;
}