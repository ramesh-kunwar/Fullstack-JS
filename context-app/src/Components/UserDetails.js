import React, { useContext } from 'react'
import {mycontext} from "../App"
const UserDetails = (props) => {
  const data = useContext(mycontext)
  console.log(data);
  return (
    <div>
        My name is  {data.name}
    </div>
  )
}

export default UserDetails