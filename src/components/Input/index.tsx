'use client'

// Core
import React, { useState } from 'react'

// Types
import { InputProps } from '@/types/layoutTypes'

// Style
import { InputContent, InputIconFloating } from './styles'

// Assets
import { LuCalendarHeart } from "react-icons/lu";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiFillMail,
  AiFillLock,  
} from "react-icons/ai";

const Input = ({
  type,
  value,
  onChange,
  error,
  placeholder,
  onBlur,
} : InputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const getTypeIcon = (): JSX.Element => {
    switch (type) {
      case 'email':
        return <AiFillMail size={19} />
      case 'password':
        return <AiFillLock size={20} />
      case 'date':
        return (
          <InputIconFloating>
            <LuCalendarHeart />
          </InputIconFloating>
        )
      default:
        return <></>
    }
  }

  return (
    <InputContent error={error}>
      {getTypeIcon()}

      {type === 'textarea' ? (
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onBlur={onBlur}
        />
      ) : (
        <input
          type={showPassword ? 'text' : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onBlur={onBlur}
        />
      )}

      {type === 'password' && (
        <button onClick={(e) => {
          e.preventDefault();
          setShowPassword(!showPassword)}
        }>
          {showPassword ? <AiFillEye size={20} /> : <AiFillEyeInvisible size={20} />}
        </button>
      )}
    </InputContent>
  )
}

export default Input