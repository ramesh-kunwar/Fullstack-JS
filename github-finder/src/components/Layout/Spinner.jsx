import React from 'react'
import spinner from './assets/spinner.svg'
const Spinner = () => {
  return (
    <div style={{width:'100%', height:'90vh' }} className='d-flex align-items-center justify-content-center'>
        <img src={spinner} alt=""  className='d-block'/>
    </div>
  )
}

export default Spinner