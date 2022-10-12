import React,{ useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import TodoInput from "./TodoInput";
import { getTasks } from "../Redux/action";

const Todos = () => {

    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    // console.log(todos);

    useEffect(() => {
        // getTasks(dispatch);
        dispatch(getTasks);
    },[dispatch]);

    return (
        <div>
            <h1>Todos</h1>
            <TodoInput/>
            {todos.length > 0 &&
             todos.map((item) => {
                return(
                    <div key={item.id}>
                       {item.title} - {item.status ? "Completed" : "Not Completed"}
                    </div>
                );
            })}
        </div>
    );
};

export default Todos;