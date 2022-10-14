import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addTasksRequest, addTasksFailure, addTasksSuccess} from "../Redux/action";

const TodoInput = () => {
    const dispatch = useDispatch();
    const [task, setTask] = useState("");

    const addTodo = () => {
        if(task){
            const payload = {
                title: task,
                status: false,
            }

            dispatch(addTasksRequest())
            axios.post(`http://localhost:8081/todos`,payload)
            .then((res) => {
                dispatch(addTasksSuccess(res.data));
            })
            .catch((err) => {
                dispatch(addTasksFailure(err));
            });
        };
    };

    return (
        <div>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)}/>
            <button onClick={addTodo}>Add Todo</button>
        </div>
    );
};

export default TodoInput;