import React from 'react'

const DisplayTasks = ({ tasks, deleteTask, changeStatus }) => {
    return (
        <div class="m-5">
            <div class="text-centre">
                <h1 class="text-center">Your Tasks</h1>
            </div>
            {tasks.length > 0 ?
                <div class="table-responsive-sm">
                    <table class="table table-hover">
                        <thead>
                            <tr class="bg-dark text-light">
                                <th scope="col">Sr.no.</th>
                                <th scope="col">Task</th>
                                <th scope="col">Description</th>
                                <th scope="col">Date Added</th>
                                <th scope="col">Deadline</th>
                                <th scope="col">Status</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tasks.map((task) => (
                                    <tr key={task.id}>
                                        <th scope="row">{task.id}</th>
                                        <td>{task.task}</td>
                                        <td > {task.description}</td>
                                        <td>{task.dateAdded}</td>
                                        <td>{task.deadline}</td>
                                        <td><h6 class={task.status ? "badge badge-success" : "badge badge-danger"}>{task.status ? 'Completed' : 'Pending'}</h6></td>
                                        {
                                            task.status ?
                                                <td>
                                                    <button type="button" class="btn btn-danger ml-2" onClick={() => deleteTask(task.id)}>Delete</button>
                                                </td>
                                                :
                                                <td>
                                                    <button type="button" class="btn btn-danger ml-2" onClick={() => deleteTask(task.id)}>Delete</button>
                                                    <button type="button" class="btn btn-success ml-2" onClick={() => changeStatus(task.id)}>Done</button>
                                                </td>

                                        }


                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
                :
                <div class='container text-center'>
                    <h3>No Tasks yet!!! Add new tasks to view them</h3>
                </div>
            }
        </div>
    )
}

export default DisplayTasks
