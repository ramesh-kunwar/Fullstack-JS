import React, { useContext, useState } from "react";
import { useEffect } from "react";
import Spinner from "../Layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

const UserResults = () => {
  const { users, loading } = useContext(GithubContext);
  console.log(users);
  if (!loading) {
    return (
      <div className="row">
        {users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default UserResults;
