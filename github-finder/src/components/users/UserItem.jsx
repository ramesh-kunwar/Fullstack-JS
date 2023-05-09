import React from "react";
import { Link } from "react-router-dom";
const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className="col-4">
      <div className=" d-flex py-3 bg-light my-1">
        <img
          style={{ width: "60px" }}
          src={avatar_url}
          className="rounded-circle w-20 mx-3"
          alt=""
        />
        <div>
          <p>{login}</p>
          <Link to={`/users/${login}`} className="fw-lighter text-dark">
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
