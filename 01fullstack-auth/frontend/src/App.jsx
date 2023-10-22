import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import UsersTable from "./components/UsersTable";
import { UserProvider } from "./contexts/user";
import Dashboard from "./components/Dashboard";
import { Outlet } from "react-router-dom";
const App = () => {
  const [users, setUsers] = useState([{}]);

  const getUsers = async () => {
    const res = await axios.get("/api/v1/user");
    const { user } = res.data;
    // console.log(user);

    setUsers(user);

    // console.log(user);
  };

  const loginUser = async () => {
    const res = await axios.post("/api/v1/login");
    return res;
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UserProvider value={{ getUsers, users, setUsers, loginUser }}>
      <div>
        <Navbar />

        <div className="container mx-auto  ">
          {/* <UsersTable /> */}

          <Outlet />
        </div>
      </div>
    </UserProvider>
  );
};

export default App;
