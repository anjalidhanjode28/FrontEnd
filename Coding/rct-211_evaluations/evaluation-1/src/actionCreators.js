//create action creator functions here, using the action types from actionTypes.js;
import * as types from "./actionTypes";


function getProductRequest(){
   return {
    type: types.GET_PRODUCTS_REQUEST,
   };
}

function getProductSuccess(payload){
    return {
     type: types.GET_PRODUCTS_SUCCESS,
     payload,
    };
 }
 
function getProductFailure(){
    return {
     type: types.GET_PRODUCTS_FAILURE,
    };
 }

 export {getProductRequest,getProductSuccess, getProductFailure};