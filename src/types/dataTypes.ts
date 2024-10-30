// Core
import React from "react";

// Types
import { HeroSliderCardProps, TimelineItemTypeENUM } from "./layoutTypes";
import { User } from "firebase/auth";
import { StaticImageData } from "next/image";
import { StorageReference } from "firebase/storage";

export type HeroSliderDataType = Array<HeroSliderCardProps>

export type FooterSocialMediaType = {icon: JSX.Element, url: string }

export interface ProvidersWrapperContext {
  loginModal: boolean;
  loading: boolean;
  setLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
  paymentMethodsModal: boolean;
  setPaymentMethodsModal: React.Dispatch<React.SetStateAction<boolean>>;
  loginMode: boolean;
  setLoginMode: React.Dispatch<React.SetStateAction<boolean>>;
  handleUserSignOut: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  user: User | null;
  planSelected: PlanResourceDataType;
  setPlanSelected: React.Dispatch<React.SetStateAction<PlanResourceDataType>>;
}

export interface TimelineItemDataType {
  type: TimelineItemTypeENUM;
  typeLabel?: string;
  typeIcon?: JSX.Element;
  desc?: string;
  date?: string;
  photo?: File | Blob;
  video?: string;
  disabled?: boolean;
  fileRef?: StorageReference;
}

export interface TimelineDataType {
  coupleNames: string;
  createdAt: string;
  id: string;
  musicLink: string;
  plan: string;
  timelineData: Array<TimelineItemDataType>;
  userId: string;
}

export type PlanDataENUM = "Essencial" | "Especial" | "Inesquecível";

export interface PlanResourceDataType {
  plan: PlanDataENUM;
  phrase: number;
  video: number;
  photo: number;
  albumMode: boolean;
  music: boolean;
  icon: StaticImageData;
  price: number;
  planPeriod: boolean;
}

export interface IndicatorItemDataType {
  icon: JSX.Element;
  field: string;
  type: TimelineItemTypeENUM;
}