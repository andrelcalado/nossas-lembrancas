'use client'

// Core
import React, { useState } from 'react'

// Types
import { InputProps } from '@/types/layoutTypes'

// Style
import { InputContent } from './styles'

// Assets
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
  placeholder  
} : InputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const getTypeIcon = (): JSX.Element => {
    switch (type) {
      case 'email':
        return <AiFillMail size={19} />
      case 'password':
        return <AiFillLock size={20} />
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
        />
      ) : (
        <input
          type={showPassword ? 'text' : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
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