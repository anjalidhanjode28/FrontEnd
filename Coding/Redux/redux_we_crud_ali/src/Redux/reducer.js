import {
  ADD,
  REDUCE,
  GET_TODOS_FAILURE,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  POST_TODO_FAILURE,
  POST_TODO_SUCCESS,
  POST_TODO_REQUEST,
  PATCH_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  PUT_TODO_SUCCESS,
  // ,POST_TODO_FAILURE,
  // POST_TODO_REQUEST,POST_TODO_SUCCESS
} from "./actionTypes";

const intialState = {
  count: 10,
  name: "Masai School",
  todos: [],
  isLoading: false,
  isError: false,
};
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        // ...state,count:state.count+1
        ...state,
        count: state.count + action.payload,
      };
    case REDUCE:
      return {
        // ...state,count:state.count-1
        ...state,
        count: state.count - action.payload,
      };
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    case GET_TODOS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        todos: [],
      };

    case POST_TODO_FAILURE:
      return {
        ...state,
        isLoading: true,
      };

    case POST_TODO_SUCCESS:
      return {
        ...state,
        isLoading: true,
      };
    case POST_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case PATCH_TODO_SUCCESS:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        isLoading: true,
      };
    case PUT_TODO_SUCCESS:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};

export { reducer };
