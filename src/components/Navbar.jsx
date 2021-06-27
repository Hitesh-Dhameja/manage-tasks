import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand text-warning" href="/">
                    <img src="data:image/jpeg;base64,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" width="30" height="30" class="d-inline-block align-top" alt="" />
                    Manage Tasks
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link to="/" class="nav-link text-success" >Home <span class="sr-only">(current)</span></Link>

                        </li>

                        <li class="nav-item">
                            <Link to="/add" class="nav-link text-success" >Add New Task</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/weather" class="nav-link text-success" >Weather</Link>

                        </li>

                    </ul>

                    <div class="dropdown mr-5">
                        <button class="btn btn-outline-warning dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Filter By
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button class="dropdown-item" type="button">Completed</button>
                            <button class="dropdown-item" type="button">Pending</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
