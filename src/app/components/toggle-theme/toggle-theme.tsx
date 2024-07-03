'use client'
import { useThemeContext } from '@/context/theme.context'
import React from 'react'

const ToggleTheme = () => {
    const { theme, toggleTheme } = useThemeContext();

  return (
    <div>
        <button onClick={toggleTheme}>{theme === "light" ? "dark" : "dark"}</button>
    </div>
  )
}

export default ToggleTheme