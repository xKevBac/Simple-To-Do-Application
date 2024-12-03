import React, {useState} from 'react'
import './TaskForm.css'
import Tag from './Tag.jsx'

const TaskForm = (props) => { 
   const [taskData, setTaskData] = useState({
        task: "",
        status: "todo",
        tags: []
    })

    const checkTag = (tag) => {
         return taskData.tags.some(item => item === tag)
    }

    const selectTag = (tag) => {
        if(taskData.tags.some(item => item === tag)){
            const filterTags = taskData.tags.filter(item => item !== tag)
            setTaskData(prev => {
                return {...prev, tags: filterTags}
            })
        } else{
            setTaskData(prev => {
                return {...prev, tags: [...prev.tags, tag]}
          })
        }
    }
    //console.log(taskData.tags)

    const handleChange = (e) => {
        const {name, value} = e.target;

        setTaskData(prev => {
            return {...prev, [name]: value}
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(taskData);
        props.setTasks(prev => {
            return [...prev, taskData]
        });
        setTaskData({
            task:"",
            status: "todo",
            tags: []
        })
    }

    return (
      <header className="app_header">
            <form onSubmit={handleSubmit}>
                <input type="text"
                value={taskData.task} 
                className="task_input" 
                placeholder="Enter your tasks" 
                name="task" 
                onChange={handleChange}
                />
                <div className="task_form_bottom_line">
                <div>
                    <Tag name="Home" selectTag={selectTag} selected={checkTag("Home")} ></Tag>
                    <Tag name="School" selectTag={selectTag} selected={checkTag("School")}></Tag>
                    <Tag name="Work" selectTag={selectTag} selected={checkTag("Work")}></Tag>
                </div>
                <div>
                    <select className="task_status"
                    value={taskData.status} 
                    name="status" 
                    onChange={handleChange}>
                        <option value="todo">To Do</option>
                        <option value="inprogress">In-Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                    <button type="submit" className="task_submit">
                        + Add Task
                    </button>
                </div>
            </div>
        </form>
      </header>
  )
}

export default TaskForm
