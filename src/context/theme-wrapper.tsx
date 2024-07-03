'use client'
import React from 'react'
import { useThemeContext } from './theme.context'

const ThemeWrapper = ({ children } : { children: React.ReactNode }) => {
    const { theme } = useThemeContext();

  return (
    <div className={theme}>
        {children}
    </div>
  )
}

export default ThemeWrapper