import React from 'react'
import './Tag.css'

const Tag = (props) => {
  const tagStyle = {
    Home: {backgroundColor: "#efA9B3"},
    School: {backgroundColor: "#15d4c8"},
    Work: {backgroundColor: "#ffd12c"},
    default: {backgroundColor: "#f9f9f9"},
  }
  return (
    <button 
      type="button"
      className='tag' 
      style = {props.selected ? tagStyle[props.name] : tagStyle.default}
      onClick={() => props.selectTag(props.name)}>
      {props.name}
    </button>
  )
}

export default Tag
