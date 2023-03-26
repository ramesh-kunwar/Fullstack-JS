import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        work: "",
        password: "",
        cpassword: "",
    })


    const handleInputs = (e) => {
        let fieldType, fieldValue;
        console.log(e.target.value);
        fieldType = e.target.name; // gives the  name of input field
        fieldValue = e.target.value;

        setUser({ ...user, [fieldType]: fieldValue })
        console.log(user);
    }

    const postData = async (e) => {
        e.preventDefault()
        const { name, email, phone, work, password, cpassword } = user;
        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, phone, work, password, cpassword })
        })
        const data =  res.json();
        if (data.status === 422 || !data) {
            alert("Invalid Registration")
        } else {
            window.alert("Registration Successful")
            navigate("/login")
        }
    }
    return (
        <div className="signup container col-md-4">
            <h1>Signup</h1>
            <div className="container mt-5">
                <form method='POST' className="register-form" id="register-form">
                    <div className="form-group mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            value={user.name}
                            onChange={handleInputs}
                            type="text" className="form-control" name='name' id="name" />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            value={user.email}
                            onChange={handleInputs}
                            type="email" className="form-control" name='email' id="email" />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input
                            value={user.phone}
                            onChange={handleInputs}
                            type="number" className="form-control" name='phone' id="phone" />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="Work" className="form-label">Profession</label>
                        <input
                            value={user.work}
                            onChange={handleInputs}
                            type="text" className="form-control" name='work' id="work" />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            value={user.password}
                            onChange={handleInputs}
                            type="password" className="form-control" name='password' id="password" />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                        <input
                            value={user.cpassword}
                            onChange={handleInputs}
                            type="password" className="form-control" name='cpassword' id="cpassword" />
                    </div>

                    <div className="form-group mb-3 form-button">
                        <input
                            onClick={postData}
                            type="submit" className="btn btn-primary" name='signup' id="signup" value="Register" />
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Signup