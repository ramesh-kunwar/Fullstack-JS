import axios, { CanceledError } from "axios";
import React, { useEffect, useState } from "react";

interface Users {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Fetching Data
  useEffect(() => {
    setIsLoading(true);
    axios
      .get<Users[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  // Delete user
  const deleteUser = (user: Users) => {
    const originalUses = [...users];
    setUsers(users.filter((u) => user.id !== u.id));

    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        console.log(err);
        setError(err.message);
        setUsers(originalUses);
      });
  };

  //creating user
  const addUser = () => {
    const originalUses = [...users];
    const newUser = { id: Math.random(), name: "Ramesh" };
    setUsers([newUser, ...users]);

    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((res) => {
        setUsers([res.data, ...users]);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUses);
      });
  };

  // update user
  const updateUser = (user: Users) => {
    const originalUsers = [...users];
    const updatedUsers = { ...user, id: Math.random(), name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUsers : user)));

    axios
      .patch(
        "https://jsonplaceholder.typicode.com/users/" + user.id,
        updateUser
      )
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };
  return (
    <div className="m-5">
      {isLoading && <div className="spinner-border"></div>}

      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>

      <h1>Users</h1>
      {error && <p className="text-danger">{error}</p>}
      <ul className="list-group">
        {users.map((user) => {
          return (
            <li
              key={Math.random()}
              className="list-group-item d-flex justify-content-between"
            >
              {user.name}
              <div className="buttons">
                <button
                  className="btn btn-outline-danger mx-2"
                  onClick={() => deleteUser(user)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-outline-secondary "
                  onClick={() => updateUser(user)}
                >
                  Update
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
