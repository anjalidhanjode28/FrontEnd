import { 
    GET_TODOS_FAILURE, 
    GET_TODOS_REQUEST, 
    GET_TODOS_SUCCESS, 
    POST_TODO_FAILURE, 
    POST_TODO_REQUEST, 
    POST_TODO_SUCCESS,
    PATCH_TODO_FAILURE,
    PATCH_TODO_REQUEST,
    PATCH_TODO_SUCCESS,
    DELETE_TODO_SUCCESS, 
    DELETE_TODO_FAILURE,
    DELETE_TODO_REQUEST,
    PUT_TODO_FAILURE,
    PUT_TODO_REQUEST,
    PUT_TODO_SUCCESS
} from "./actionTypes"

//action object creators
const handleAddCount=(payload)=>{
    return {
        type:"ADD",
        payload,
    }
}

const handleReduceCount=(payload)=>{
    return {
        type:"REDUCE",
        payload,
    }
}
const getTodosRequest=()=>{
    return {
        type:GET_TODOS_REQUEST,
    }
}
const getTodosSuccess=(payload)=>{
    return {
        type:GET_TODOS_SUCCESS,
        payload,
    }
}

const getTodosFailure=()=>{
    return {
        type:GET_TODOS_FAILURE,
    }
}

const postTodoFailure=()=>{
    return {
        type:POST_TODO_FAILURE
    }
}

const postTodoRequest=()=>{
    return {
        type:POST_TODO_REQUEST
    }
}

const postTodoSuccess=(payload)=>{
    return {
        type:POST_TODO_SUCCESS,
        payload,
    }
}

const patchTodoFailure=()=>{
    return {
        type:PATCH_TODO_FAILURE,
     
    }
}
const patchTodoRequest=()=>{
    return {
        type:PATCH_TODO_REQUEST,
       
    }
}
const patchTodoSuccess=(payload)=>{
    return {
        type:PATCH_TODO_SUCCESS,
        payload,
        
    }
}
const deleteTodoFailure=()=>{
    return {
        type:DELETE_TODO_FAILURE,
  
    }
}
const deleteTodoRequest=()=>{
    return {
        type:DELETE_TODO_REQUEST,
    }
}
const deleteTodoSuccess=()=>{
    return {
        type:DELETE_TODO_SUCCESS,
   
    }
}

const putTodoFailure=()=>{
    return {
        type:PUT_TODO_FAILURE,
     
    }
}
const putTodoRequest=()=>{
    return {
        type:PUT_TODO_REQUEST,
       
    }
}
const putTodoSuccess=(payload)=>{
    return {
        type:PUT_TODO_SUCCESS,
        payload,
        
    }
}



export {
    handleAddCount,
    handleReduceCount,
    getTodosFailure,
    getTodosRequest,
    getTodosSuccess,
    postTodoFailure,
    postTodoRequest,
    postTodoSuccess,
    deleteTodoFailure,
    deleteTodoRequest,
    deleteTodoSuccess,
    patchTodoFailure,
    patchTodoRequest,
    patchTodoSuccess,
    putTodoFailure,
    putTodoRequest,
    putTodoSuccess
};