export const getTodos = (args = {}) => {
   const { 
    titleSortBy = "ASC",
    page = 1
    } = args;

    return fetch(`http://localhost:3000/tasks?_sort=title&_order=${titleSortBy}&_page=${page}&_limit=3`)
     .then(res=>res.json())
 }
export const addTodos = (todo) => {
     return fetch("http://localhost:3000/tasks",{
         method: "POST",
         headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify(todo)
     })
     .then (res=>res.json())
 }
 
export const toggleTodo = (id, newStatus) => {
   return fetch(`http://localhost:3000/tasks/${id}`,{
       method: "PATCH",
       headers: {
           "Content-Type": "application/json"
       },
       body: JSON.stringify({ status: newStatus })
   })
   .then(res=>res.json())
 }
 
export const deleteTodo = (id) => {
   return fetch(`http://localhost:3000/tasks/${id}`,{
       method: "DELETE",
       headers: {
           "Content-Type": "application/json"
       },
       
   })
   .then(res=>res.json())
 }