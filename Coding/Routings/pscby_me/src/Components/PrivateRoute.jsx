import React, {useContext} from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {isAuth} = useContext(AuthContext);

    if(isAuth){
        return <Navigate to="/login"/>
    }
    return children;
};

export default PrivateRoute;