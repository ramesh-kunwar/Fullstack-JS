import React, { useContext, useState } from "react";
import GithubContext from "../../context/github/GithubContext";

const UserSearch = () => {
  const [text, setText] = useState("");

  const { users, searchUsers } = useContext(GithubContext);
  console.log(users);
  // console.log(text);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      alert("Please enter something");
    } else {
      // @todo - search users

      searchUsers(text)

      setText("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="container">
      <div style={{ height: "90vh" }} className="container mt-5 pt-5 ">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control p-3"
            placeholder="Search..."
            value={text}
            onChange={handleChange}
          />

          <div class="input-group-append">
            <button className="btn btn-primary p-3">Search</button>
          </div>
        </div>

        {/* Clear button */}
        {/* {users.length > 0 && (
          <button className="btn btn-secondary">Clear</button>
        )} */}

        <br />
      </div>
    </form>
  );
};

export default UserSearch;
