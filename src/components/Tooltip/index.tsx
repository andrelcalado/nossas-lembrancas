'use client'

// Core
import React, { useEffect } from 'react'

// Styles
import { TooltipContent } from './styles'

// Types
import { TooltipProps } from '@/types/layoutTypes'

const Tooltip = ({
  active,
  setActive,
  message,
} : TooltipProps) => {

  useEffect(() => {
    if (active) {
      setTimeout(() => {
        setActive(false);
      }, 2000);
    }
  }, [active])
  
  return (
    <TooltipContent active={active}>
      {message}
    </TooltipContent>
  )
}

export default Tooltip