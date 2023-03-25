import React from 'react'

const Contact = () => {
  return (
    <form className="container mt-5">
      <div className="row">
        <div className="col">
          <h3>Phone</h3>
          <p>9803468381</p>
        </div>
        <div className="col">
          <h3>Email</h3>
          <p>rameshkunwar1110@gmail.com</p>
        </div>
        <div className="col">
          <h3>Address</h3>
          <p>Dhobihat, Lalitpur</p>
        </div>
      </div>
      <h1 className="mt-5">
        Get In Touch
      </h1>
      <div className="row mt-3">
        <div className="col"><input className='form-control' type="text" placeholder='Your Name' /></div>
        <div className="col"><input className='form-control' type="email" placeholder='You Email' /></div>
        <div className="col"><input className='form-control' type="number" placeholder='You Phone Number' /></div>
        <div className="col mt-5">
        </div>
        <div className='container'>
          <textarea name="" id="" className="form-control my-4" rows="5" placeholder='Your Messege'></textarea>

        </div>
      </div>
      <input type="submit" value="Send Message" className='btn btn-primary' />
    </form>
  )
}

export default Contact