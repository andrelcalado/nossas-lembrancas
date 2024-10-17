/* eslint-disable @typescript-eslint/no-explicit-any */

// Types
import { StaticImageData } from "next/image";
import { 
  Dispatch,
  HTMLAttributeAnchorTarget,
  SetStateAction
} from "react";
import { TimelineItemDataType } from "./dataTypes";

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
  onClick?: (el: any) => void | React.MouseEventHandler<HTMLButtonElement>;
  size?: ElementSizeENUM;
  variation?: ButtonVariationENUM;
  loading?: boolean;
  disabled?: boolean;
  id?: string;
  name?: string;
}

export interface HeroSliderCardProps {
  media: string | StaticImageData;
  desc: string;
  date: string;
  mediaType: 'photo' | 'video';
}

export interface SocialButtonProps {
  icon: JSX.Element;
  url: string;
  target?: HTMLAttributeAnchorTarget;
}

export type InputTypeENUM = "text" | "email" | "password" | "textarea";
export interface InputProps {
  placeholder?: string;
  value?: string;
  error?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
  type: InputTypeENUM;
}

export type ElementsPositionType = "top" | "center" | "bottom";

export interface TimelineItemType {
  typeIcon: JSX.Element;
  typeLabel: string;
}

export interface DropdownProps {
  openDropdown: boolean;
  position: ElementsPositionType;
  list: Array<TimelineItemType | TimelineItemDataType | any>;
  onChange?: (item: TimelineItemType | TimelineItemDataType | any) => void;
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

export type TimelineItemTypeENUM = "add" | "initial-phrase" | "phrase" | "photo" | "video" | "final-phrase";

export interface TimelineItemProps {
  type: TimelineItemTypeENUM;
  photo?: string;
  setPhoto?: () => void;
  video?: string;
  setVideo?: () => void;
  desc?: string;
  setDesc?: (value: string) => void;
  date?: string;
  setDate?: () => void;
  addItem?: (item: TimelineItemDataType) => void;
  deleteItem?: (index: number) => void;
}