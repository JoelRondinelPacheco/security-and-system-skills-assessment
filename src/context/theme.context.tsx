'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'

export type ThemeContextType = {
    theme: string,
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

const getTheme = (): string => {
    return 'dark';
}

const ThemeContextProvider = ({ children } : { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<string>(() => {
        return getTheme();
    })

    useEffect(() => {
        const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const savedTheme = localStorage.getItem('theme') || preferredTheme;
        setTheme(savedTheme);
      }, []);

      useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme); // Aplicar data-theme al elemento <html>
      }, [theme]);
    
      const toggleTheme = () => {
        setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
      };

  return (
    <ThemeContext.Provider
        value={{
            theme,
            toggleTheme
        }}
    >
        {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("Context error message");
    }
    return context;
}

export default ThemeContextProvider;