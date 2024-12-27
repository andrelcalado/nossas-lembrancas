// Core
import React from 'react'
import Image from 'next/image'

// Types
import { LoadingProps } from '@/types/layoutTypes'

// Assets
import LogoSquare from '../../assets/img/logo-square.svg';

// Styles
import { LoadingContent, LoadingScreen } from './styles'

const Loading = ({ type = 'element', loading, size, color = 'white' }: LoadingProps) => {
  const getTypeContent = () => {
    if (type === 'screen') {
      return (
        <LoadingScreen>
          <Image src={LogoSquare} alt="Logo" />
        </LoadingScreen>
      )
    }
  
    return <LoadingContent color={color} size={size} />
  }

  return loading ? getTypeContent() : <></>;
}

export default Loading