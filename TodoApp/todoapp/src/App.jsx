import React, {useState, useEffect} from 'react'
import "./App.css"
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'

import ToDoIcon from "./assets/RedPoint.png"
import InProgIcon from "./assets/Thinking.png"
import DoneIcon from "./assets/Done.png"


const oldTasks = localStorage.getItem("tasks")

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || [])

  useEffect(() =>{
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex)
    setTasks(newTasks)
  }

  console.log("tasks", tasks)
  return (
    <div className='app'>
      <TaskForm setTasks={setTasks}></TaskForm>
      <main className='app_main'>
        <TaskColumn title='To Do' icon={ToDoIcon} tasks={tasks} status="todo" handleDelete={handleDelete}/>
        <TaskColumn title='In Progress' icon={InProgIcon} tasks={tasks} status="inprogress"  handleDelete={handleDelete}/>
        <TaskColumn title='Complete' icon={DoneIcon} tasks={tasks} status="completed"  handleDelete={handleDelete}/>
      </main>
    </div>
  );
};

export default App
