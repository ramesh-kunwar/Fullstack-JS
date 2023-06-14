import React from "react";
import Users from "./Components/Users";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <h1>App</h1>
      {/* <Users /> */}
      <Outlet />
    </div>
  );
};

export default App;
