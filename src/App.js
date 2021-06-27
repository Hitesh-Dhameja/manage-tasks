import { useState } from 'react'
import { Route, Switch } from 'react-router';
import Navbar from "./components/Navbar"
import DisplayTasks from "./components/DisplayTasks";
import AddTask from "./components/AddTask";
import Footer from './components/Footer';
import Weather from './components/Weather';

function App() {
  let today = new Date().toISOString().slice(0, 10)
  const [tasks, setTask] = useState(
    [
      {
        id: 1,
        task: 'Cooking',
        description: 'Make the Vada Pav',
        dateAdded: today,
        deadline: '2021-06-27',
        status: true
      },
      {
        id: 2,
        task: 'Complete task-1',
        description: 'Update the link to project to mentor',
        dateAdded: today,
        deadline: '2021-06-30',
        status: false
      },
      {
        id: 3,
        task: 'Learn about Hooks',
        description: 'Research about more hooks other than useState',
        dateAdded: today,
        deadline: '2021-06-29',
        status: true
      }
    ]
  );

  const addtask = (task) => {
    const id = tasks.length + 1
    const newtask = { id, ...task }
    setTask([...tasks, newtask])

  }

  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id))
  }
  const changeStatus = (id) => {
    setTask(tasks.map((task) => task.id === id ? { ...task, status: !task.status } : task))
  }



  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/' exact
          component={() =>
            <DisplayTasks tasks={tasks} deleteTask={deleteTask} changeStatus={changeStatus} />
          }
        />
        <Route path='/add' component={() => <AddTask addtask={addtask} />} />
        <Route path='/weather' component={() => <Weather />} />
      </Switch>
      <Footer />



    </div>
  );
}

export default App;


