import React from 'react'
import { useState } from 'react'

const AddTask = ({ addtask }) => {
    const [task, settask] = useState('')
    const [description, setdescrip] = useState('')
    const [deadline, setdealine] = useState('')
    let dateAdded = new Date().toISOString().slice(0, 10)
    const status = false
    const onSubmitTask = (e) => {
        e.preventDefault();
        if (task === '') { alert('Please enter the task') }
        else {
            if (description === '') { alert('Please enter the description') }
            else {
                if (deadline === '') { alert('Please set the dealine') }
                else {
                    
                    addtask({ task, description, dateAdded, deadline, status })
                }
            }
        }

    }

    return (
        <div class="container">
            <form onSubmit={onSubmitTask}>
                <div class="form-group">
                    <label for="tasks">Task</label>
                    <input type="text" class="form-control" id="exampleInputtask"
                        value={task}
                        onChange={(e) => { settask(e.target.value) }} />
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea class="form-control" id="exampledescription" rows="3"
                        value={description}
                        onChange={(e) => { setdescrip(e.target.value) }}></textarea>
                </div>
                <div class="form-group">
                    <label for="deadline">Deadline</label>
                    <input type="date" class="form-control" id="exampledate"
                        value={deadline}
                        onChange={(e) => { setdealine(e.target.value) }} />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>


            </form>
        </div>
    )
}

export default AddTask
