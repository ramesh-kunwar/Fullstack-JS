import { createContext, useContext } from "react";

export const UserContext = createContext({
    users: [],
  getUsers: () => {},
  loginUser: () =>{}
});

export const UserProvider = UserContext.Provider

export default function useUsers() {
    return useContext(UserContext)
}
