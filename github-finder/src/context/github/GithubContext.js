import { createContext, useReducer, useState } from "react";
import githubReducer from "./GithubReducer";


const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {

    const initialState = {
        users: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)


    //  Get search results
    const searchUsers = async (text) => {
        setLoading()

        const params = new URLSearchParams({
            q: text
        })
        console.log(params);
        const response = await fetch(`${GITHUB_URL}/search/users/?${params}`, {
            headers:{
                Authorization: `token ${GITHUB_TOKEN}`
            }
        });

        const {data} = await response.json();
        console.log(data, 'data');


        dispatch({
            type: "GET_USERS",
            payload: data,
        })


    };

    // set loading
    const setLoading = () => dispatch({ type: "SET_LOADING" })

    return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        searchUsers
    }}>{children}</GithubContext.Provider>
}

export default GithubContext