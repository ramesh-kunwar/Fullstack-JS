import React from "react";

import Register from "./Register";
import { useGetUsersQuery } from "../slices/userApiSlice";

const Users = () => {
  const { data: users, isLoading, error } = useGetUsersQuery();
console.log(users);
  return (
    <div>
      <div className="user-details mb-5">
      <a href="/signup" className="btn btn-primary">Register</a>

        <h1>Users List</h1>
        <table className="table">
          <tr>
            <td scope="col">Name</td>
            <td scope="col">Email</td>
            <td scope="col">Password</td>
          </tr>
          {users?.data.map((user) => {
            return (
            <tbody key={Math.random()}>
                  <tr scope="row" key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            </tbody>
            );
          })}
        </table>
      </div>
      {/* <Register /> */}
    </div>
  );
};

export default Users;
