import React, { useContext } from "react";
// import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export const Home = () => {
   const {toggleAuth} = useContext(AuthContext);

  return (
    <div>
       <h1>Home Page</h1>
       <button onClick={toggleAuth}>LOGOUT</button>
    </div>
  );
};