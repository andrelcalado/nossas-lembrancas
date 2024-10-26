// Core
import React from 'react'

// Types
import { LoadingProps } from '@/types/layoutTypes'

// Styles
import { LoadingContent } from './styles'

const Loading = ({ loading, size, color = 'white' }: LoadingProps) => {
  return loading ? (
    <LoadingContent color={color} size={size} />
  ) : (
    <></>
  )
}

export default Loading