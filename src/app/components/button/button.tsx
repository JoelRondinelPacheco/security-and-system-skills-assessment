import React from 'react'
import styles from "./styles.module.css"

interface ButtonProps {
    children: React.ReactNode,
    disabled?: boolean,
    type?: "submit"

}

const Button = ({ children, disabled, type }: ButtonProps) => {
  return (
    <button className={styles.button} type={type} disabled={disabled}>{ children }</button>
  )
}

export default Button