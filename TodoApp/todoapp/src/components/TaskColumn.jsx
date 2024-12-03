import React from 'react'
import ToDo from "../assets/RedPoint.png"
import './TaskColumn.css'
import TaskCard from './TaskCard';

const TaskColumn = (props) => {
  return (
   <section className="task_column">
        <h2 className="tasks_column_heading">
            <img className="task_column_icon" src={props.icon} alt="" /> 
            {props.title}
        </h2>

        {/* <TaskCard></TaskCard> */}
        
        {props.tasks.map(
          (task, index) =>
            task.status === props.status && (
              <TaskCard
                key = {index}
                title={task.task}
                tags={task.tags}
                handleDelete={props.handleDelete}
                index={index}
              />
            )
        )}
   </section>
  );
};

export default TaskColumn
