import * as types from "./actionType";
import axios from "axios";

const getMusicRecordRequest = () => {
    return {
        type : types.GET_MUSIC_RECORD_REQUEST
    }
};

const getMusicRecordSuccess = (payload) => {
    return {
        type : types.GET_MUSIC_RECORD_SUCCESS,
        payload
    }
};

const getMusicRecordFailure = () => {
    return {
        type : types.GET_MUSIC_RECORD_FAILURE
    }
};



const getMusicRecord = (queryParams) => (dispatch) => {
    // console.log(queryParams);
    dispatch(getMusicRecordRequest());

    return axios
        .get(`http://localhost:8088/albums`, queryParams)
        .then((res) => {
            dispatch(getMusicRecordSuccess(res.data));
        })
        .catch((err) => {
            dispatch(getMusicRecordFailure());
        });
};


const updateMusicRecord = (id,payload) => (dispatch) => {

    dispatch({type: types.UPDATE_MUSIC_RECORD_REQUEST});

    return axios
        .patch(`http://localhost:8088/albums/${id}`, payload)
        .then((res) => {
            dispatch({type: types.UPDATE_MUSIC_RECORD_SUCCESS});
        })
        .catch((err) => {
            dispatch({type: types.UPDATE_MUSIC_RECORD_FAILURE});
        });
};

export {getMusicRecord, updateMusicRecord};