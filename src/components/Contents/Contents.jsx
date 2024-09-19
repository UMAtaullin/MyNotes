import React from 'react'
import { Route, Routes } from 'react-router-dom'
import JS from '../JS/JS'
import Layout from '../Layout/Layout'
import cls from './Contents.module.css'

const Contents = () => {
  return (
    <div className={cls.content}>
      <Routes>
        <Route path='/layout/' element={<Layout />} />
        <Route path='/js/*' element={<JS />} />
        {/* <Route path='/react' element={<ReactComp />} /> */}
      </Routes>
    </div>
  )
}

export default Contents
