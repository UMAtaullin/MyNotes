import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import JS from './JS/JS'


const Contents = () => {
  return (
    <main>
      <Routes>
        <Route path='/layout/' element={<Layout/>} />
        <Route path='/js/*' element={<JS/>} />
        {/* <Route path='/react' element={<ReactComp />} /> */}
      </Routes>
    </main>
  )
}

export default Contents
