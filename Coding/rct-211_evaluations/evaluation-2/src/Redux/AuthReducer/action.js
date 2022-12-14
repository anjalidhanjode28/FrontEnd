//Write the ActionCreator functions here
import * as types from "./actionTypes";
import axios from "axios";

const login = (payload) => (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST});

    return axios({
        method: "POST",
        url: "./api/login",
        baseURL: "https://reqres.in",
        data: payload,
    })
    .then((res) => dispatch({type: types.LOGIN_SUCCESS, payload: res.data}))
    .catch((err) => dispatch({type: types.LOGIN_FAILURE, payload: err}))
};

export { login };