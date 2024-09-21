import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Variables from './Topics/Variables'
import Functions from './Topics/Function'
import Objects from './Topics/Objects'
import cls from './JS.module.css'
import DOM from './Topics/DOM'

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
          <li className={cls.item}>
            <NavLink to='/js/dom/'>DOM &#9660;</NavLink>
            <ul>
              <li>
                <NavLink to='/js/dom/ds'>DOM1 &#9660;</NavLink>
                <ul>
                  <li>
                    <NavLink to='/js/dom/dd11'>DOM11</NavLink>
                  </li>
                  <li>
                    <NavLink to='/js/dom/dd12'>DOM12</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to='/js/dom/dd'>DOM2</NavLink>
              </li>
              <li>
                <NavLink to='/js/dom/ff'>DOM3</NavLink>
              </li>
              <li>
                <NavLink to='/js/dom/ee'>DOM4</NavLink>
              </li>
              <li>
                <NavLink to='/js/dom/dd'>DOM5</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div className={cls.cont}>
        <Routes>
          <Route path='/variables/' element={<Variables />} />
          <Route path='/functions/' element={<Functions />} />
          <Route path='/objects/' element={<Objects />} />
          <Route path='/dom/' element={<DOM />} />
        </Routes>
      </div>
    </div>
  )
}

export default JS
