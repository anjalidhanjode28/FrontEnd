import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addTasksRequest, addTasksFailure, addTasksSuccess,getTasks} from "../Redux/action";

const TodoInput = ({getTasks}) => {
    const dispatch = useDispatch();
    const [task, setTask] = useState("");

    const addTodo = () => {
        if(task){
            const payload = {
                title: task,
                status: false,
            }

            dispatch(addTasksRequest());

            return axios.post(`http://localhost:8181/todos`, payload)
            .then((res) => {
                dispatch(addTasksSuccess());
                setTask("");
            })
            .catch((err) => {
                dispatch(addTasksFailure(err));
            });
        }
    };

    const handleAddTodo = () => {
        //add the data in db.json file first , and then make a get request.
        addTodo().then(() => {
            // getTasks(dispatch);
            dispatch(getTasks);
        });
    };

    return (
        <div>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)}/>
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
};

export default TodoInput;