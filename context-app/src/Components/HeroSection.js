import React from 'react'
import UserCard from './UserCard'

const HeroSection = (props) => {
  return (
    <div>
      <img src="https://apiv4.reactrepo.com/template_attachments_s/portfolio-preview.jpg"/>
      <UserCard username={props.username} btnColor={props.btnColor} />

    </div>
  )
}

export default HeroSection