import React, { useState } from "react";

const UserSearch = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // handleChange();

    if (text == "") {
      alert("Please enter something");
    } else {
      // @todo search users
      setText("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="container">
      <div
        style={{ height: "90vh" }}
        className="container d-flex align-items-center justify-content-center "
      >
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control p-3"
            placeholder="Search..."
            value={text}
            onChange={handleChange}
          />

          <div class="input-group-append">
            <button className="btn btn-primary p-3" type="button">
              Search
            </button>
          </div>
        </div>
      </div>
      {/* <h1>{text}</h1> */}
    </form>
  );
};

export default UserSearch;
