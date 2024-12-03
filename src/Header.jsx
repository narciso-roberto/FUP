import React from 'react'
import styles from "./header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`container ${styles.navegacao}`}>
        <h1>NARCISO.</h1>
        <ul>
            <a href='./'>Projetos</a>
            <a href='./'>Skills</a>
            <a href='./'>Sobre mim</a>
        </ul>
      </nav>
    </header>
  )
}

export default Header
