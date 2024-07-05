import React from 'react'
import styles from "./styles.module.css"

interface ButtonProps {
    children: React.ReactNode,
    error?: boolean
    disabled?: boolean,
    type?: "submit",
    variant?: "success" | "destructive" | "default",
}

const Button = ({ children, disabled, type, variant }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${(variant === "default" || variant === undefined) && styles.default } ${variant === "success" && styles.buttonSuccess} ${variant === "destructive" && styles.buttonDestructive}`} type={type} disabled={disabled}>{ children }</button>
  )
}

export default Button