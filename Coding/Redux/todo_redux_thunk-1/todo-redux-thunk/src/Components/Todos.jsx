import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
    getTasksRequest,
    getTasksSuccess,
    getTasksFailure,
} from "../Redux/action";
import TodoInput from "./TodoInput";


const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    const getTasks = () => {
        dispatch(getTasksRequest());
        axios.get(`http://localhost:8081/todos`)
        .then((res) => {
            dispatch(getTasksSuccess(res.data));
        })
        .catch((err) => {
            dispatch(getTasksFailure(err));
        });
    };

    console.log(todos);
    useEffect(() => {
        getTasks();
    },[dispatch]);

    return (
        <div>
            <h1>Todos</h1>
            <TodoInput/>
            {todos.length > 0 && todos.map((item) => {
                return(
                    <div>
                       {item.title} - {item.status ? "True" : "False"}
                    </div>
                );
            })}
        </div>
    );
};

export default Todos;