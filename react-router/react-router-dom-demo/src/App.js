import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from "./Components/Home"
import Contact from "./Components/Contact"
import Error from "./Components/Error"
import Services from "./Components/Services"


function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
