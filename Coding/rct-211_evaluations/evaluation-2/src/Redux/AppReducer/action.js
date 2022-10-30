//Write the ActionCreator functions here
import * as types from "./actionType";
import axios from "axios";

const getWatches = (params) => (dispatch) => {

    dispatch({ type: types.GET_WATCHES_DATA_REQUEST });

    return axios.get(`http://localhost:8080/watches`, params)
    .then((res) => {
        console.log(res.data);
        dispatch({ type: types.GET_WATCHES_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) =>
        dispatch({ type: types.GET_WATCHES_DATA_FAILURE, payload: err })
    );
};

export { getWatches };