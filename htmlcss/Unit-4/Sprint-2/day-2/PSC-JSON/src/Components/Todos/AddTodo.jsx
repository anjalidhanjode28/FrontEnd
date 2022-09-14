import React from 'react';
import {useState} from "react";
const AddTodo = ({
    handleAdd
}) => {
    const [text, setText] =useState("");

    const handleChange = e => {
        setText(e.target.value)
    }

    const handleSubmit = () => {
        handleAdd(text)
    }
  return (
    <div>
      <input onChange={handleChange}placeholder='add something'/>
      <button onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default AddTodo
