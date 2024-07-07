import React from 'react'
import styles from './style/Header.module.css'

const Header = () => {
  return (
    <header className={styles.bgHeader}>
      <div className={styles.containerHeader +" "+ styles.header}>
        <h1>LOLja</h1>
        <nav>
            <ul>
                <li>Home</li>
                <li>Carrinho</li>
                <li>Contato</li>
            </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
