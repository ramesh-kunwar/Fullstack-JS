import React from "react";
import UserResults from "../users/UserResults";
import UserSearch from "../users/UserSearch";

const Home = () => {
  return (
    <div
      style={{ height: "90vh" }}
      className="container "
    >
      <div>
        <UserSearch />
        <UserResults />
      </div>
    </div>
  );
};

export default Home;
