import React from 'react'
import { NavLink } from 'react-router-dom'
import cls from './Header.module.css'

const Header = () => {
  return (
    <header className={cls.header}>
      <div className={cls.logo}>
        <NavLink to='main_page'>UMA</NavLink>
      </div>
    </header>
  )
}

export default Header
