import TodosInput from "./TodosInput";
import axios from "axios";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getTodosFailure,
  getTodosRequest,
  getTodosSuccess,
  postTodoFailure,
  postTodoRequest,
  postTodoSuccess,
  patchTodoFailure,
  patchTodoRequest,
  patchTodoSuccess,
  deleteTodoFailure,
  deleteTodoRequest,
  deleteTodoSuccess,
  // putTodoFailure,putTodoRequest,putTodoSuccess
} from "../Redux/action";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import SingleTask from "./SingleTask";
import Edit from "./EditPage";

const Todos = () => {
  const dispatch = useDispatch();
  const { todos, isLoading } = useSelector((state) => {
    return {
      todos: state.todos,
      isLoading: state.isLoading,
      // isError:state.isError,
    };
  }, shallowEqual);

  const getTodos = () => {
    const getTodosReqActObj = getTodosRequest();
    dispatch(getTodosReqActObj);
    axios
      .get("http://localhost:8080/todos")
      .then((res) => {
        console.log(res);
        dispatch(getTodosSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(getTodosFailure());
      });
  };

  const addTodo = (title) => {
    if (title) {
      const payload = {
        title,
        status: false,
      };
      dispatch(postTodoRequest());
      return axios
        .post("http://localhost:8080/todos", payload)
        .then((r) => {
          dispatch(postTodoSuccess(r.data));
        })
        .catch((e) => {
          dispatch(postTodoFailure());
        });
    }
  };

  const handleAddTodo = (text) => {
    addTodo(text).then(() => getTodos());
  };

  const toggleTodo = (id, newStatus) => {
    if (id) {
      const payload = {
        id,
        status: newStatus,
      };
      dispatch(patchTodoRequest());
      return axios
        .patch(`http://localhost:8080/todos/${id}`, payload)
        .then((r) => {
          dispatch(patchTodoSuccess(r.data));
        })
        .catch((err) => {
          console.log(err);
          dispatch(patchTodoFailure());
        });
    }
  };

  const handleToggle = (id, newStatus) => {
    toggleTodo(id, newStatus)
      .then(() => getTodos())
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteTodo = (id) => {
    if (id) {
      dispatch(deleteTodoRequest());
      return axios
        .delete(`http://localhost:8080/todos/${id}`)
        .then((r) => {
          dispatch(deleteTodoSuccess());
        })
        .catch((e) => {
          dispatch(deleteTodoFailure());
        });
    }
  };

  const handleDelete = (id) => {
    deleteTodo(id).then(() => getTodos());
  };


  useEffect(() => {
    getTodos();
  }, []);


  console.log("Todos is rendering");

  return (
    <div>
      <h1>Todos</h1>
      <Routes>
        <Route path="/tasks/:id" element={<SingleTask />}>
          SingleTask Page
        </Route>
        <Route
          path="/edit/:id"
          element={<Edit handleUpdateTodo={getTodos} />}
        ></Route>
      </Routes>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <TodosInput handleAddTodo={handleAddTodo} />
      )}
      {todos.length > 0 &&
        todos.map((item) => {
          return (
            <div key={item.id}>
              <Link to={`/tasks/${item.id}`}>
                {item.title}-{item.status ? "Completed" : "Not Completed"}
              </Link>
              <button onClick={() => handleToggle(item.id, !item.status)}>
                Toggle
              </button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
              <Link to={`edit/${item.id}`}>Edit</Link>
            </div>
          );
        })}
    </div>
  );
};

export default Todos;
