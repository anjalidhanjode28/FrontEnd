import * as types from "./actionTypes";

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

const addTasksSuccess = (payload) => {
    return {
       type: types.ADD_TODOS_SUCCESS,
       payload,
    };
};


const addTasksFailure = () => {
    return {
       type: types.ADD_TODOS_FAILURE,
    };
};

export {
    getTasksRequest,
    getTasksSuccess,
    getTasksFailure,
    addTasksSuccess,
    addTasksRequest,
    addTasksFailure,
};