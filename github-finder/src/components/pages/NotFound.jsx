import React from "react";
import {Link} from 'react-router-dom'
const NotFound = () => {
  return (
    <div
      style={{ height: "90vh" }}
      className="container  d-flex align-items-center text-center justify-content-center "
    >
      <div>
        <h1 className="display-1 fw-bold text-center">OOPS!</h1>
        <h1 className="display-3 fw-bold text-center">NOT FOUND</h1>

        <Link to='/' className="btn btn-primary btn-lg mt-3"> Back To Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
