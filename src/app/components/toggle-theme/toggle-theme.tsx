'use client'
import { useThemeContext } from '@/context/theme.context'
import React, { SVGProps, useEffect, useState } from 'react'
import styles from './styles.module.css'

export function PhMoon(props?: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 256 256" {...props}><path fill="currentColor" d="M233.54 142.23a8 8 0 0 0-8-2a88.08 88.08 0 0 1-109.8-109.8a8 8 0 0 0-10-10a104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.1 103.1 0 0 0 62.52-20.88a104.84 104.84 0 0 0 37-52.91a8 8 0 0 0-1.98-7.98m-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104a106 106 0 0 0 14.92-1.06a89 89 0 0 1-26.02 31.4"/></svg>
  )
}

export function TablerSun(props?: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" {...props}><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-5 0h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7"/></svg>
  )
}

const ToggleTheme = () => {
    const { theme, toggleTheme } = useThemeContext();
    const [icon, setIcon] = useState(PhMoon({color: "white"}));

    useEffect(() => {
      setIcon(theme === "light" ? PhMoon({color: "black"}) : TablerSun({color: "white"}))
    }, [theme])

  return (
    <div className={styles.container}>
        <div onClick={toggleTheme}>
          {
            icon
          }
          </div>
    </div>
  )
}

export default ToggleTheme