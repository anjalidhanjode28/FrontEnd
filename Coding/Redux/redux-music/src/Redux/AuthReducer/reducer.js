import * as types from "./actionTypes";

const initialState ={
    isAuth: false,
    token: "",
    isAuthLoading: false,
    isAuthError: false,
};

const reducer = (oldState = initialState, action) => {
    const {type, payload} = action;

    switch(type){
        case types.USER_LOGIN_REQUEST:
            return {
                ...oldState,
                isAuthLoading: true,
            };
        case types.USER_LOGIN_SUCCESS:
            return {
                ...oldState,
                isAuth: true,
                isAuthLoading: false,
                token: payload,
            };
        case types.USER_LOGIN_FAILURE:
            return {
                ...oldState,
                isAuth: false,
                isAuthLoading: false,
                token: "",
                isAuthError: true,
            };
        default:
            return oldState;
    };
};

export {reducer};