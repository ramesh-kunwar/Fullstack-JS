import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'

import Signup from './components/Signup'
import Login from './components/Login'
import Contact from './components/Contact'
import ErrorPage from './components/ErrorPage'

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<ErrorPage />}>
          {/* <ErrorPage /> */}
        </Route>



      </Routes>
    </>
  )
}

export default App