import * as types from "./actionTypes";
import axios from "axios";

const getTasksRequest = () => {
    return {
       type: types.GET_TODOS_REQUEST,
    };
};

const getTasksSuccess = (payload) => {
    return {
       type: types.GET_TODOS_SUCCESS,
       payload,
    };
};


const getTasksFailure = () => {
    return {
       type: types.GET_TODOS_FAILURE,
    };
};

const addTasksRequest = () => {
    return {
       type: types.ADD_TODOS_REQUEST,
    };
};

const addTasksSuccess = () => {
    return {
       type: types.ADD_TODOS_SUCCESS,
    };
};


const addTasksFailure = () => {
    return {
       type: types.ADD_TODOS_FAILURE,
    };
};

const getTasks = (dispatch) => {
    dispatch(getTasksRequest());
    axios.get(`http://localhost:8181/todos`)
    .then((res) => {
        dispatch(getTasksSuccess(res.data));
    })
    .catch((err) => {
        dispatch(getTasksFailure(err));
    });
};

export {
    getTasksRequest,
    getTasksSuccess,
    getTasksFailure,
    getTasks,
    addTasksSuccess,
    addTasksRequest,
    addTasksFailure,
};