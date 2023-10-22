import React from "react";
import useUsers from "../contexts/user";

const Dashboard = () => {
  const { users } = useUsers();
  console.log(users, "dash");
  return (
    <div className="container mx-auto">
      {users.map((user) => {
        return <h1> {user.firstName}</h1>;
      })}
    </div>
  );
};

export default Dashboard;
