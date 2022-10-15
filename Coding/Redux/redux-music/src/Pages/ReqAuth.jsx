import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
// to check user is authenticated ,if yes redirects him/her to protected routes/pages else navigate to them to login page

const ReqAuth = ({children}) => {

    const auth = useSelector((store) => store.AuthReducer.isAuth);
    const location = useLocation();

    if(!auth){
        // navigate to login page
        return <Navigate to="/login" state={{from: location.pathname}} replace/>;
    }
    return children;
};

export default ReqAuth;