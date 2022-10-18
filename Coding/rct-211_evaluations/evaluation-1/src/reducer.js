//import the action types here from the actionTypes.js to be used in the reducer function
import * as types from "./actionTypes";
import { initialState } from "./initialState";

//Complete the reducer function here
const reducer = (state = initialState, action) => {
    
    switch (action.type){
        case types.GET_PRODUCTS_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case types.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload,
            };
        case types.GET_PRODUCTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        default:
            return state;
    }
};

export { reducer };
