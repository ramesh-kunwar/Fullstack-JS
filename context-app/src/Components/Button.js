import React, {useContext} from 'react'
import {mycontext} from "../App"
const Button = () => {
  const data = useContext(mycontext)

  console.log(data.color);
  return (
    <div 
    style={{backgroundColor:data.color}}
    >Color Changer</div>
  )
}

export default Button