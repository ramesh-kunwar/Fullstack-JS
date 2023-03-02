import  React,{ createContext, useState } from 'react';
import './App.css';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';

export const mycontext = React.createContext()

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
   <mycontext.Provider value={{name, color}}>
     <>
      <Navbar />
      <form action="">
        <input type="text" placeholder='Enter your name' value={name} onChange={myName} />
        <input type="text" placeholder='Enter your color' value={color} onChange={myColor} />
      </form>
      <HeroSection />

    </>
   </mycontext.Provider>
  );
}

export default App;
