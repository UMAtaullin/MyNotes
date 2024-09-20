import React from 'react'
import cls from './Nav.module.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className={cls.nav}>
      <div className={cls.row}>
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
  )
}

export default Nav
