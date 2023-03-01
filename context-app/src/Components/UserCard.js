import React from 'react'
import Button from './Button'
import UserDetails from './UserDetails'

const UserCard = (props) => {
  return (
    <div>
        <UserDetails username={props.username}/>
        <Button btnColor={props.btnColor} />
    </div>
  )
}

export default UserCard