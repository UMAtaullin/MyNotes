import React from 'react'
import cls from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className={cls.header}>
      <nav className={cls.nav}>
        <div className={cls.row}>
          <div className={cls.logo}>
            <NavLink to='main_page'>UMA</NavLink>
          </div>
          <div className={cls.item}>
            <NavLink to='layout'>Layout</NavLink>
          </div>
          <div className={cls.item}>
            <NavLink to='js'>JS</NavLink>
          </div>
          <div className={cls.item}>
            <NavLink to='react'>React</NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
