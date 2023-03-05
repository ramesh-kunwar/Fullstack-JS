import React, { useState } from 'react'
import axios from 'axios'
const Form = () => {
    const [taskName, setTaskName] = useState("")
    const [taskStatus, setTaskStatus] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        submitData()

    }

    const submitData = async () => {
        const data = {
            taskName,
            taskStatus
        }
        const res = await axios.post("/createtasks", data)
        console.log(res);
    }
    // "proxy": "http://localhost:4000",



    return (
        <div className='w-50 mx-auto'>
            <form onSubmit={handleSubmit}>
                <h1 className='text-center my-3'>Enter Tasks</h1>
                <div className="input-group mb-3">
                    <div className="input-group-text">
                        <input onChange={() => setTaskStatus(!taskStatus)} value={taskStatus} className="form-check-input mt-0" type="checkbox" />
                    </div>
                    <input onChange={(e) => setTaskName(e.target.value)} placeholder='Enter Task' type="text" className="form-control" aria-label="Text input with checkbox" />
                </div>

                <input type="submit" className='btn btn-primary' value="Add Task" />
            </form>
        </div>
    )
}

export default Form