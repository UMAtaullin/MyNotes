import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Variables from './Topics/Variables'
import Functions from './Topics/Function'
import Objects from './Topics/Objects'
import cls from './JS.module.css'

const JS = () => {
  return (
    <div className={cls.js}>
      <nav className={cls.items}>
        <ul>
          <li className={cls.item}>
            <NavLink to='/js/variables/'>Переменные</NavLink>
          </li>
          <li className={cls.item}>
            <NavLink to='/js/functions/'>Функции</NavLink>
          </li>
          <li className={cls.item}>
            <NavLink to='/js/objects/'>Объекты</NavLink>
          </li>
        </ul>
      </nav>

      <div className={cls.cont}>
        <Routes>
          <Route path='/variables/' element={<Variables />} />
          <Route path='/functions/' element={<Functions />} />
          <Route path='/objects/' element={<Objects />} />
        </Routes>
      </div>
    </div>
  )
}

export default JS
