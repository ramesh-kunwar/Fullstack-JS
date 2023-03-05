import axios from 'axios'
import React, { useEffect, useState } from 'react'

const TaskLists = () => {
    const [userData, setUserData] = useState(null);

  const fetchUserData =  async () => {
    const resp = await  axios.get("/gettasks");
    console.log(resp.data.todos);
    // if No users are there please dont set the values
    if (resp.data.todos.length > 0) {
        console.log(resp);
      setUserData(resp.data.todos);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);



    return (
        <div>
            <table className="table w-25 text- mx-auto">
                <thead>
                    <tr>
                        <th scope="col">Task Name</th>
                        <th scope="col">Task Status</th>
                    </tr>
                </thead>
                <tbody>
              {userData &&
                userData.map((todo) => (
                  <tr>
                    <td className="px-4 py-3">{todo.taskName}</td>
                    <td className="px-4 py-3">{todo.taskStatus}</td>
                    <td className="px-4 py-3">
                        
                      <button
                        className="hover:text-green-500"
                        // onClick={() => handleEdit(user)}
                      >
                        Edit
                      </button>
                    </td>
                    <td className="px-4 py-3 text-lg text-gray-900">
                      <button
                        className="hover:text-red-500"
                        // onClick={() => handleDelete(user._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
            </table>
        </div>
    )
}

export default TaskLists