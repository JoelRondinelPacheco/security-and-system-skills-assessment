'use client'
import React from 'react'
import styles from "./styles.module.css";
import ToggleTheme from '../toggle-theme/toggle-theme';

const Header = () => {
  return (
    <header className={`global-wrapper`}>
        <nav className={styles.headerNav}>
            <section>
                Title
            </section>
            <section>
                User info
                <ToggleTheme />
            </section>
        </nav>
    </header>
  )
}

export default Header