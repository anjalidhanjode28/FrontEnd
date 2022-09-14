import React from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import { useEffect, useState } from 'react'
import { getTodos, addTodos, toggleTodo,deleteTodo } from '../../api/todos'
import Pagination from './Pagination'


const Todo = () => {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] =  useState([]);
  const [titleSortBy, setTitleSortBy] = useState("ASC");
  const [page, setPage] = useState(1);
    
      useEffect(() => {
        handleGetTodos()
      
      }, [titleSortBy, page] )

      const handleGetTodos = () => {
        setLoading(true)
        return getTodos({
          titleSortBy,
          page
        })
       .then(res=> {
        setLoading(false)
        setTodos(res)
        console.log(res)
      })
       .catch(err=>{
        setLoading(false)
       })
      }
      const handleAdd = (text) => {
         const item = {
            title: text,
            status: false
         }
         setLoading(true)
         addTodos(item)
         .then(res=>{
            console.log(res)
            handleGetTodos()
         })
         .catch(err => {
          setLoading(false)
         })
      }

      const handleToggle = (id,newStatus) => {
        setLoading(true)
        toggleTodo(id, newStatus)
        .then(res=>{
          handleGetTodos()
        })
        .catch(err=> {
          setLoading(false)
        })
      }

      const handleDelete = (id) => {
        setLoading(true)
        deleteTodo(id)
        .then(res=>{
          handleGetTodos()
        })
        .catch(err=> {
          setLoading(false)
        })
      }
      
  return (
    <div>
         <div>
            {loading && "Loading!"}
          </div>
      <AddTodo handleAdd={handleAdd}/>
      <div>
        <button onClick={()=>setTitleSortBy(prev=>prev==="ASC"? "DESC" : "ASC")}>
          {titleSortBy === "ASC" ? "MAKE DECENDING" : "MAKE ASCENDING"}
        </button>
      </div>
      <h3>Pending</h3>
      {
        todos.map(item=>
            <TodoList 
            key={item.id}
            title={item.title} 
            status={item.status} 
            id={item.id}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
            />)
      }
      {/*
     <h3>Completed</h3>
     {
      todos.filter(item => item.status).map(item=>
          <TodoList 
          key={item.id}
          title={item.title} 
          status={item.status} 
          id={item.id}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
          />)
    } */}
   <div>
    <button disabled={page===1} onClick={() => setPage(prev =>prev-1)}>Prev</button>
    <button>{page}</button>
    <button onClick={() => setPage(prev =>prev+1)}>Next</button>
    </div>

    <Pagination total= {10} current={page} onChange={(value)=>setPage(value)} />
    </div>
  )

}

export default Todo
