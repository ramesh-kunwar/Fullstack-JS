import React, { useEffect, useRef, useState } from "react";
import ProductList from "./components/ProductList";

import apiClient, { CanceledError } from "./services/api-client";
import userService, { Users } from "./services/user-service";

const App = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [error, setError] = useState();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

  const {request, cancel} =   userService
      .getAllUsers()
      request.
      .then((response) => {
        setUsers(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  const deleteUser = (user: Users) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    apiClient.delete("/users/" + user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const newUser = { id: Math.random(), name: "Ramesh" };
    setUsers([newUser, ...users]);

    apiClient
      .post("/users", newUser)
      .then((res) => setUsers([res.data, ...users]));
  };

  const updateUser = (user: Users) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + " ! " };

    setUsers(users.map((u) => (u.id === user.id ? updatedUser : user)));

    apiClient.patch("/users" + user.id, updateUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });

    console.log(user);
  };
  return (
    <div className=" m-5">
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}

      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => {
          return (
            <li
              key={Math.random()}
              className="list-group-item d-flex justify-content-between"
            >
              {user.name}

              <div className="">
                <button
                  className="btn btn-outline-secondary mx-3"
                  onClick={() => updateUser(user)}
                >
                  Update
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteUser(user)}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
