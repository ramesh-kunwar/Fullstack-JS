import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const loginUser = async (e) => {
        e.preventDefault()
        console.log(email, password);

        const res = await fetch("/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            }) // when sending data we convert to string
        })
        const data = res.json();

        if (res.status === 400 || !data) {
            alert("Invalid Credentials")
        } else {
            alert("Login Successful");
            navigate("/")
        }
    }
    return (
        <div className="signin container col-md-4">
            <h1>Sign In</h1>
            <div className="container mt-5">
                <form method="POST" className="register-form" id="register-form">

                    <div className="form-group mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email" className="form-control" name='email' id="email" />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password" className="form-control" name='password' id="password" />
                    </div>

                    <div className="form-group mb-3 form-button">
                        {/* <label for="cpassword" class="form-label">Confirm Password</label> */}
                        <input
                            onClick={loginUser}
                            type="submit" className="btn btn-primary" name='signin' id="signin" value="Log In" />
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login