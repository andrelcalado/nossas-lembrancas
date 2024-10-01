'use client'

// Core
import React from "react";

// Styles
import { ButtonComponent } from "./styles";

// Types
import { ButtonProps } from "@/types/layoutTypes";

export default function Button({ children, href, onClick, size = 'sm' }: ButtonProps) {
  return (
    <ButtonComponent size={size} href={href || '#'} onClick={onClick}>
      {children}
    </ButtonComponent>
  );
}
