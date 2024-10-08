'use client'

// Core
import React from "react";

// Styles
import { ButtonComponent } from "./styles";

// Types
import { ButtonProps } from "@/types/layoutTypes";

export default function Button({
  children,
  variation = 'fill',
  onClick,
  size = 'sm'
}: ButtonProps) {
  return (
    <ButtonComponent
      size={size}
      onClick={onClick}
      variation={variation}
    >
      {children}
    </ButtonComponent>
  );
}
