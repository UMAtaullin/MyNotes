import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Variables from './Topics/Variables'
import Functions from './Topics/Function'
import Objects from './Topics/Objects'

const JS = () => {
  return (
    <div>
      <h2>Раздел: JavaScript</h2>
      <nav>
        <ul>
          <li>
            <NavLink to='variables'>Переменные</NavLink>
          </li>
          <li>
            <NavLink to='functions'>Функции</NavLink>
          </li>
          <li>
            <NavLink to='objects'>Объекты</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='variables' element={<Variables/>} />
        <Route path='functions' element={<Functions/>} />
        <Route path='objects' element={<Objects/>} />
      </Routes>
    </div>
  )
}

export default JS
