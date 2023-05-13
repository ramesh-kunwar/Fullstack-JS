import React, { useContext, useEffect, useState } from "react";
import GithubContext from "../../context/github/GithubContext";
const UserList = () => {
 const {users, loading, fetchUser} = useContext(GithubContext)
 console.log(users, 'USERS');
  useEffect(() => {
    fetchUser();
  }, []);

  if (!loading) {
    return (
      <div className="container">
        {users.map((user) => {
          return <p key={user.id}> {user.login} </p>;
        })}
      </div>
    );
  } else {
    return <h1>Loading.....</h1>;
  }
};

export default UserList;
