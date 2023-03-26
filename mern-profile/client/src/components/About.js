import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState({})
  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include" 
      })
      const data = await res.json()
      console.log(data, "data");
      setUserData(data)
      console.log(userData, "user Dat");

      if(!res.status === 100) {
        const error = new Error(res.error)
        throw error;
      }

    } catch (error) {
      console.log(error);
      navigate("/signup")
    }
  }
  useEffect(()=>{
    callAboutPage()
  })

  return (
    <div className="container mt-5">
      <form method='GET'>
        <div className="row">

          <div className="col-md-4">
            <img className='card-img ' src="https://wallpapers.com/images/hd/cool-profile-picture-ld8f4n1qemczkrig.jpg" alt="picture" />
          </div>
          <div className="col-md-6 ">
            <div>
              <h5>Ramesh Kunwar</h5>
              <h5>Web Developer</h5>
              <p>Rankings: <span className="fw-bold">1/10</span></p>
              <ul className="nav nav-tabs">
                <li className="active px-3 "><a data-toggle="tab" className='btn' aria-current="page" href="#about">About</a></li>
                <li><a data-toggle="tab" className='px-3 btn' href="#timeline">Timeline </a></li>

              </ul>
              <div className="tab-content mt-5">
                {/* about */}
                <div id="about" className="tab-pane fade in active">
                  <h3>About</h3>
                  <div >
                    <label htmlFor='' className='fw-bold'>User Id</label>
                    <p className="fw-light ">{userData._id}</p>
                  </div>
                  <div >
                    <label htmlFor='' className='fw-bold'>Name</label>
                    <p className="fw-light ">{userData.name}</p>
                  </div>
                  <div >
                    <label htmlFor='' className='fw-bold'>Email</label>
                    <p className="fw-light ">{userData.email}</p>
                  </div>
                  <div >
                    <label htmlFor='' className='fw-bold'>Phone</label>
                    <p className="fw-light ">{userData.phone}</p>
                  </div>
                  <div >
                    <label htmlFor=''  className='fw-bold'>Profession</label>
                    <p className="fw-light ">{userData.work}</p>
                  </div>
                </div>
                {/* about */}

                {/* timeline */}

                <div id="timeline" className="tab-pane fade">
                  <h3>Timeline </h3>
                  <div >
                    <label className='fw-bold'>Experience </label>
                    <p className="fw-light ">Expert</p>
                  </div>
                  <div >
                    <label className='fw-bold'>Hourly Rate</label>
                    <p className="fw-light ">10$/hr</p>
                  </div>
                  <div >
                    <label className='fw-bold'>Total Projects</label>
                    <p className="fw-light ">E230</p>
                  </div>
                  <div >
                    <label className='fw-bold'>English Level</label>
                    <p className="fw-light ">Expert</p>
                  </div>
                  <div >
                    <label className='fw-bold'>Availability</label>
                    <p className="fw-light ">6 Months </p>
                  </div>
                </div>

              </div>

              {/* </timeline> */}

            </div>
          </div>
          <div className="col-md-2">
            <input type="submit" className='btn btn-warning' name='btnAddMore' value="Edit Profile" />
          </div>

          <div className="row">
            <div className="col d-block">
              <p>WORK LINK</p>
              <a href="#" target="_blank" className='d-block'>Website</a>
              <a href="#" target="_blank" className='d-block'>Instagram</a>
              <a href="#" target="_blank" className='d-block'>Github</a>
              <a href="#" target="_blank" className='d-block'>Facebook</a>
              <a href="#" target="_blank" className='d-block'> LinkedIn</a>
            </div>

          </div>
        </div>

      </form >
    </div >
  )
}

export default About