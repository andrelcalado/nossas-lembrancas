// Types
import { StaticImageData } from "next/image";
import { 
  Dispatch,
  HTMLAttributeAnchorTarget,
  SetStateAction
} from "react";

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
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: ElementSizeENUM;
  variation?: ButtonVariationENUM;
  loading?: boolean;
  disabled?: boolean;
  id?: string;
  name?: string;
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

export type InputTypeENUM = "text" | "email" | "password";
export interface InputProps {
  placeholder?: string;
  value?: string;
  error?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: InputTypeENUM;
}

export interface LoginFormProps {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

export interface LoadingProps {
  loading: boolean;
  size?: ElementSizeENUM;
}

export type LoginMethod = "email_pwd" | "phone";