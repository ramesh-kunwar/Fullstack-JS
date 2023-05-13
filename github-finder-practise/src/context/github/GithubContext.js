import { createContext, useReducer, useState } from "react";
import githubReducer from "./GithubReducer";

const GITHUB_API = "https://api.github.com";

const GithubContext = createContext()



export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(githubReducer,initialState)

    const fetchUser = async () => {
        setLoading()

        const response = await fetch(`${GITHUB_API}/users`);
        const data = await response.json();

        dispatch({
            type: 'GET_USERS',
            payload: data,
            loading: false,
        })

    };

    // set loading
    const setLoading = () => dispatch({
        type: 'SET_LOADING'
    })
    return (
        <GithubContext.Provider value={{
            users:state.users, loading:state.loading, fetchUser
        }}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext