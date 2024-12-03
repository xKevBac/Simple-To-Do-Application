import React from 'react'
import "./TaskCard.css"
import Tag from './Tag'
import deleteIcon from "../assets/Delete.png"

const TaskCard = (props) => {
  return (
    <article className="task_card">
        <p className="task_text">{props.title}</p>
        <div className="task_card_bottom_line">
            <div className="task_card_tags">
              {
                props.tags.map((tag, index) => <Tag key={index} name={tag} selected={true}/>)
              }
            </div>
            <div className="task_delete" onClick={() => props.handleDelete(props.index)}>
                <img src={deleteIcon} className="delete_icon" alt="" />
            </div>
        </div>
    </article>
  )
}

export default TaskCard
