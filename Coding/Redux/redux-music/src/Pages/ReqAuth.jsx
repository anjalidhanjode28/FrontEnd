import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// to check user is authenticated ,if yes redirects him/her to protected routes/pages else navigate to them to login page

const ReqAuth = ({children}) => {

    const auth = useSelector(store => store.AuthReducer.isAuth);
    
    if(!auth){
        // navigate to login page
        return <Navigate to="/login"/>;
    }
    return children;
};

export default ReqAuth;