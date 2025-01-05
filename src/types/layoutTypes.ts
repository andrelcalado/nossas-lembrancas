/* eslint-disable @typescript-eslint/no-explicit-any */

// Types
import { StaticImageData } from "next/image";
import React, { 
  Dispatch,
  HTMLAttributeAnchorTarget,
  SetStateAction
} from "react";
import { PlanResourceDataType, TimelineItemDataType } from "./dataTypes";

export type ColorLightEnum = 100 | 200 | 300 | 400 | 500 | 600 | 700;
export interface Theme {
  colors: {
    white: string,
    black: string,
    gray: Record<ColorLightEnum, string>,
    secondary: Record<ColorLightEnum, string>,
    primary: Record<ColorLightEnum, string>,
    blue: Record<ColorLightEnum, string>,
  }
}

export type ElementSizeENUM = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonVariationENUM = 'fill' | 'border' | 'border-white' | 'fill-blue';
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: (el: any) => void | React.MouseEventHandler<HTMLButtonElement> | Promise<void>;
  size?: ElementSizeENUM;
  variation?: ButtonVariationENUM;
  loading?: boolean;
  disabled?: boolean;
  id?: string;
  name?: string;
  className?: string;
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

export type InputTypeENUM = "text" | "email" | "password" | "textarea" | "date";
export interface InputProps {
  placeholder?: string;
  value?: string;
  error?: boolean;
  maxLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: () => void;
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
  list?: Array<TimelineItemType | TimelineItemDataType | any>;
  onChange?: (item: TimelineItemType | TimelineItemDataType | any) => void;
}

export interface LoginFormProps {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

export interface LoadingProps {
  type?: 'screen' | 'element';
  loading: boolean;
  size?: ElementSizeENUM;
  color?: 'white' | 'primary';
}

export type LoginMethod = "email_pwd" | "phone";

export type TimelineItemTypeENUM = "add" | "initial-phrase" | "phrase" | "photo" | "video" | "final-phrase";

export interface TimelineItemProps {
  type: TimelineItemTypeENUM;
  photo?: File | Blob;
  setPhoto?: (el: File | null | undefined ) => void;
  video?: string;
  setVideo?: () => void;
  desc?: string;
  setDesc?: (value: string) => void;
  date?: string;
  setDate?: (value: string) => void;
  addItem?: (item: TimelineItemDataType) => void;
  deleteItem?: (index: number) => void;
  memoriesAvailable?: Array<TimelineItemDataType>;
  mediaOrientation?: 'horizontal' | 'vertical';
  setMediaOrientation?: (value: 'horizontal' | 'vertical') => void;
  loading?: boolean;
}

export interface TimelineItemAnimatedProps {
  type: TimelineItemTypeENUM;
  photo?: File | Blob;
  video?: string;
  desc?: string;
  className?: string;
  date?: string;
  mediaOrientation?: 'horizontal' | 'vertical';
}

export interface PlansModalProps {
  openPlansModal: boolean;
  setPlansModal: Dispatch<SetStateAction<boolean>>;
}

export interface PreviewModalProps {
  hiddenGiftButton?: boolean;
  watermark?: boolean;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  timelineData: Array<TimelineItemDataType>;
  musicLink?: string;
  handleToGift: ((el: any) => void | React.MouseEventHandler<HTMLButtonElement> | Promise<void>) | undefined;
}

export interface PaymentMethodsModalProps {
  couplePath?: string;
}

export interface PlanItemProps {
  eachPlan: PlanResourceDataType;
  popular?: boolean;
  selected?: boolean;
  handleSelect?: () => void;
}