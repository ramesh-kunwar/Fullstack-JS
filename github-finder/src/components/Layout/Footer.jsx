import React from 'react'

const footerYear = new Date().getFullYear()
const Footer = () => {
  return (
    <div className='text-center pt-5 bg-light pb-3'>
        <p>Copyright &copy; {footerYear}</p>
    </div>
  )
}

export default Footer