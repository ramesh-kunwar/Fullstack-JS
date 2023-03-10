import React, { useState } from 'react'
import axios from 'axios';

const Form = () => {
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState()
    const handleSubmit = (event) => {
        event.preventDefault()

        submitData()

        setUserName("")
        setUserEmail("")

    }

    // funciton to send the data
    const submitData = async () => {
        const data = {
            name: userName,
            email: userEmail,
        }
        console.log(data);
        // sending data to backend
        const res = await axios.post("/createuser", data) // use proxy in package.json 
        // const res = await axios.post("http://localhost:4000/createuser", data) // use proxy in package.json 
  // "proxy" : "http://localhost:4000",

        console.log(res);

    }
    return (
        <div>

            <form onSubmit={handleSubmit}>
                <section className="text-gray-600 body-font relative">
                    <div className="container px-5 py-8 mx-auto">
                        <div className="flex flex-col text-center w-full mb-6">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                                Create User
                            </h1>
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label
                                            htmlFor="name"
                                            className="leading-7 text-sm text-gray-600"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={userName}
                                            onChange={(event) => setUserName(event.target.value)}
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label
                                            htmlFor="email"
                                            className="leading-7 text-sm text-gray-600"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            value={userEmail}
                                            onChange={(event) => {
                                                setUserEmail(event.target.value)
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button
                                        type="submit"
                                        className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>


            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-8">
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
                            All Users
                        </h1>
                    </div>
                    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                        <table className="table-auto w-full text-left whitespace-no-wrap">
                            <thead>
                                <tr>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                                        Name
                                    </th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                        Email
                                    </th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                        Edit
                                    </th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-4 py-3">One</td>
                                    <td className="px-4 py-3">Two</td>
                                    <td className="px-4 py-3">
                                        <button className="hover:text-green-500">Edit</button>
                                    </td>
                                    <td className="px-4 py-3 text-lg text-gray-900">
                                        <button className="hover:text-red-500">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Form