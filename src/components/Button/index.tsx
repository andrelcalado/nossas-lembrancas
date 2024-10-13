'use client'

// Core
import React from "react";

// Styles
import { ButtonComponent } from "./styles";

// Components
import Loading from "../Loading";

// Types
import { ButtonProps } from "@/types/layoutTypes";

export default function Button({
  children,
  variation = 'fill',
  onClick,
  size = 'sm',
  loading = false,
  disabled,
  id,
  name,
}: ButtonProps) {
  return (
    <ButtonComponent
      id={id}
      name={name}
      size={size}
      onClick={onClick}
      variation={variation}
      disabled={loading || disabled}
    >
      {loading ? (
        <Loading size="xs" loading={loading} />
      ) : children}
    </ButtonComponent>
  );
}
