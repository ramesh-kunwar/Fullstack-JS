import { useState } from 'react';
import './App.css';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';

function App() {
  const [name, setName] = useState("")
  const [color, setColor] = useState("")

  const myName = (event) => {
    setName(
      event.target.value
    )
    console.log(name);
  }
  const myColor = (event) => {
    setColor(
      event.target.value
    )
    console.log(color);
  }
  return (
    <>
      <Navbar />
      <form action="">
        <input type="text" placeholder='Enter your name' value={name} onChange={myName} />
        <input type="text" placeholder='Enter your color' value={color} onChange={myColor} />
      </form>
      <HeroSection username={name} btnColor={color} />

    </>
  );
}

export default App;
