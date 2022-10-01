// action creators related to auth state;


export const loginSuccess=(ls)=>{
    return {type:"LOGIN_SUCCESS",payload:ls}
}
export const loginFailure=(lf)=>{
    return {type:"LOGIN_FAILURE",payload:lf}
}
export const loginRequest=(lr)=>{
    return {type:"LOGIN_REQUEST",payload:lr}
}