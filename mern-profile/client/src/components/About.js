import React from 'react'

const About = () => {
  return (
    <div className="container mt-5">
      <form action="">
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
                    <label className='fw-bold'>User Id</label>
                    <p className="fw-light ">347394873294</p>
                  </div>
                  <div >
                    <label className='fw-bold'>Name</label>
                    <p className="fw-light ">Ramesh Kunwar</p>
                  </div>
                  <div >
                    <label className='fw-bold'>Email</label>
                    <p className="fw-light ">rameshkunwar@gmail.com</p>
                  </div>
                  <div >
                    <label className='fw-bold'>Phone</label>
                    <p className="fw-light ">980345345</p>
                  </div>
                  <div >
                    <label className='fw-bold'>Profession</label>
                    <p className="fw-light ">Web Developer</p>
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