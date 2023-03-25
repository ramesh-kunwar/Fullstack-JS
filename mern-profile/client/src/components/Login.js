import React from 'react'

const signin = () => {
    return (
        <div className="signin container col-md-4">
            <h1>signin</h1>
            <div className="container mt-5">
                <form action="" className="register-form" id="register-form">

                    <div className="form-group mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control" name='email' id="email" />
                    </div>

                    <div className="form-group mb-3">
                        <label for="password" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' id="password" />
                    </div>

                    <div className="form-group mb-3 form-button">
                        {/* <label for="cpassword" class="form-label">Confirm Password</label> */}
                        <input type="submit" className="btn btn-primary" name='signin' id="signin" value="Log In" />
                    </div>

                </form>
            </div>
        </div>
    )
}

export default signin