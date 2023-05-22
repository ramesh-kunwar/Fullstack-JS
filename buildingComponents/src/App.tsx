import axios from "axios";
import React, { FormEvent, useEffect, useState } from "react";

const API = "https://jsonplaceholder.typicode.com/users";

interface Users {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [error, setError] = useState("");

  const [name, setName] = useState("");

  // fetchTodos
  useEffect(() => {
    axios
      .get<Users[]>(API)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      });
  }, []);

  // delete User
  const deleteUser = (user: Users) => {
    const originalUser = [...users];
    const filteredUser = users.filter((u) => u.id !== user.id);
    setUsers(filteredUser);

    axios.delete(`${API}/${user.id}`).catch((err) => {
      setError(err.message);
      setUsers(originalUser);
    });
  };

  // create user
  const addUser = (e: FormEvent) => {
    e.preventDefault();
    const newUser = {
      id: Math.random(),
      name: name,
    };
    setUsers([newUser, ...users]);


    axios.post<Users[]>(API, newUser)
    .then((res)=>{
      console.log(res.data);
      // setUsers([res.data, ...users])
    })
  };
  return (
    <div className="m-5">
      <form action="">
        <input
          type="text"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-primary my-3" onClick={addUser}>
          Add user
        </button>
      </form>

      {error && <p className="text-danger fw-bold">{error}</p>}
      <ul className="list-group container">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            <p>{user.name}</p>
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
