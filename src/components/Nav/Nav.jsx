import React from 'react'
import cls from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={cls.nav}>
      <div className={cls.item}>Layout</div>
      <div className={cls.item}>Java Script</div>
      <div className={cls.item}>React</div>
    </nav>
  )
}

export default Nav
