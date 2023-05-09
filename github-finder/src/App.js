import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'
const App = () => {
  return (
    <Router>
      <div lassName="d-flex align-content-between flex-column">
        <Navbar />

        <main className='container mx-auto px-3 pb-5 '>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App