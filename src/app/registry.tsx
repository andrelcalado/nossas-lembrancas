'use client'
//  Core
import React, { useState } from 'react'

// Libraries
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from 'styled-components'

// Theme
import { theme } from '@/theme/globalStyles'
 
export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())
 
  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })
 
  if (typeof window !== 'undefined') return <>{children}</>
 
  return (
    <ThemeProvider theme={theme}>
      <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
        {children}
      </StyleSheetManager>
    </ThemeProvider>
  )
}