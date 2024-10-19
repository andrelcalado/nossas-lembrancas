'use client'

// Core
import React from 'react'

// Styles
import { DropdownPopupContent, DropdownPopupItem } from './styles'

// Types
import { DropdownProps } from '@/types/layoutTypes'

export const DropdownPopup = ({
  openDropdown,
  position,
  list,
  onChange,  
}: DropdownProps) => {
  return (
    <DropdownPopupContent
      openDropdown={openDropdown}
      position={position}
    >
      {list?.map((item, index) => (
        <li
          key={index}
        >
          <DropdownPopupItem
            onClick={() => onChange && onChange(item)}
            disabled={item.disabled}
          >
            {item.typeIcon && item.typeIcon}
            <span>{item.typeLabel}</span>
          </DropdownPopupItem>
        </li>
      ))}      
    </DropdownPopupContent>
  )
}
