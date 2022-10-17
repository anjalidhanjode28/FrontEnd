import { useState } from "react"
import { useParams } from "react-router-dom";
import axios from "axios"
import {useDispatch} from "react-redux"
import { putTodoFailure } from "../Redux/action";
import { putTodoRequest } from "../Redux/action";
import { putTodoSuccess } from "../Redux/action";
import {
    getTodosFailure,getTodosRequest,
    getTodosSuccess}
    from "../Redux/action";

export default function Edit(){ 

    const dispatch=useDispatch();

    const getTodos=()=>{
        const getTodosReqActObj=getTodosRequest();
        dispatch(getTodosReqActObj)
         axios.get("http://localhost:8080/todos")
        .then((res)=>{
            console.log(res)
            dispatch(getTodosSuccess(res.data))
        }).catch((err)=>{
            console.log(err)
            dispatch(getTodosFailure())
        })
    }

    const { id } = useParams();

    const updateTodo = (id,title) => {
        if (id) {
          const payload = {
            id,
            title,
            status:false,
          };
          dispatch(putTodoRequest());
          return axios.put(`http://localhost:8080/todos/${id}`, payload)
            .then((r) => {
              dispatch(putTodoSuccess(r.data))
              // dispatch(getTodosSuccess(r.data))
            })
            .catch((err) => {
              console.log(err)
              dispatch(putTodoFailure());
            });
        }
      };
    
      const handleUpdateTodo = (id,text) => {
        updateTodo(id,text).then(() => getTodos());
      };
        



const [text,setText]=useState("")

const handleUpdate=()=>{
    if(text){
     handleUpdateTodo(id,text)
        setText("")
    }
}

    return <div>
        <h1>Edit</h1>
        <div>
        <input type="text" placeholder="update task" onChange={(e)=>setText(e.target.value)} value={text} />
        <button onClick={handleUpdate}>Update</button>
        </div>

    </div>
}