// Core
import React from 'react'

// Types
import { LoadingProps } from '@/types/layoutTypes'

// Styles
import { LoadingContent } from './styles'

const Loading = ({ loading, size }: LoadingProps) => {
  return loading ? (
    <LoadingContent size={size} />
  ) : (
    <></>
  )
}

export default Loading