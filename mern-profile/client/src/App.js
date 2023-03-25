import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'

import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />




      </Routes>
    </>
  )
}

export default App