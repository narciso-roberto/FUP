import React from 'react'
import { Link } from 'react-router-dom'
import './style/Header.css'


const Header = () => {

  return (
    <nav className='navegacao'>
        <span><Link to='/'>Produtos</Link></span>
        <span><Link to='contato'>Contato</Link></span>
    </nav>
  )
}

export default Header
