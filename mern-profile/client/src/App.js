import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'

import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<Signup />} />




      </Routes>
    </>
  )
}

export default App