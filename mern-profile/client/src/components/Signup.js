import React from 'react'

const Signup = () => {
    return (
        <div className="signup container col-md-4">
            <h1>Signup</h1>
            <div className="container mt-5">
                <form action="" className="register-form" id="register-form">
                    <div className="form-group mb-3">
                        <label for="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' id="name" />
                    </div>

                    <div className="form-group mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control" name='email' id="email" />
                    </div>

                    <div className="form-group mb-3">
                        <label for="phone" className="form-label">Phone</label>
                        <input type="number" className="form-control" name='phone' id="phone" />
                    </div>

                    <div className="form-group mb-3">
                        <label for="Work" className="form-label">Profession</label>
                        <input type="text" className="form-control" name='work' id="work" />
                    </div>

                    <div className="form-group mb-3">
                        <label for="password" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' id="password" />
                    </div>

                    <div className="form-group mb-3">
                        <label for="cpassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" name='cpassword' id="cpassword" />
                    </div>

                    <div className="form-group mb-3 form-button">
                        {/* <label for="cpassword" class="form-label">Confirm Password</label> */}
                        <input type="submit" className="btn btn-primary" name='signup' id="signup" value="Register" />
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Signup