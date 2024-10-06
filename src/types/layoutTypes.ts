// Types
import { StaticImageData } from "next/image";
import { HTMLAttributeAnchorTarget } from "react";

export type ColorLightEnum = 100 | 200 | 300 | 400 | 500 | 600 | 700;
export interface Theme {
  colors: {
    white: string,
    black: string,
    gray: Record<ColorLightEnum, string>,
    secondary: Record<ColorLightEnum, string>,
    primary: Record<ColorLightEnum, string>
  }
}

export type ElementSizeENUM = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonVariationENUM = 'fill' | 'border';
export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  size?: ElementSizeENUM;
  variation?: ButtonVariationENUM;
}

export interface HeroSliderCardProps {
  photo: StaticImageData;
  desc: string;
  date: string;
}

export interface SocialButtonProps {
  icon: JSX.Element;
  url: string;
  target?: HTMLAttributeAnchorTarget;
}