import React, { useEffect, useState } from "react";
import axios from "axios";
import useUsers from "../contexts/user";
const UsersTable = () => {
  const { users } = useUsers();


  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 rounded-l-lg">
              S.N
            </th>
            <th scope="col" className="px-6 py-3 rounded-l-lg">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              User
            </th>
          </tr>
        </thead>
        {users.length > 0 &&
          users.map((user, index) => {
            return (
              <tbody key={Math.random()}>
                <tr className="bg-white dark:bg-gray-800">
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {index + 1}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {user._id}
                  </td>
                  <td className="px-6 py-4">
                    {user.firstName} {user.lastName}
                  </td>
                </tr>
              </tbody>
            );
          })}

        <tfoot>
          <tr className="font-semibold text-gray-900 dark:text-white">
            <th scope="row" className="px-6 py-3 text-base">
              Total
            </th>
            <td className="px-6 py-3">{users.length}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default UsersTable;
