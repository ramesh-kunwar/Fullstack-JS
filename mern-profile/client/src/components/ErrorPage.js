import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className=''
            style={{ height: "90vh", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
            <div className="container text-center ">
                <h1 className='text-danger'>WE ARE SORRY, PAGE NOT FOUND!</h1>
                <p className="fw-light">The page you are looking form might have been removed had its name changed or is temporarily unavialabel </p>
                <NavLink to="/" className="btn btn-primary rounded">BACK TO HOMEPAGE</NavLink>

            </div>
        </div>
    )
}

export default ErrorPage