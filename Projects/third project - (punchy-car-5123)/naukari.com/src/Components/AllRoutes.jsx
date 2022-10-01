import React from "react";
import { Routes, Route } from "react-router-dom";
import {Company} from "../Pages/Company";
import {Service} from "../Pages/Service";
import { Home } from "../Pages/Home";
import {Job} from "../Pages/Job";
import { Register } from "../Pages/Register";
import {Login} from "../Pages/Login";


function AllRoutes(){
    return <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/job" element={<Job/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/company" element={<Company/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </div>
}
export default AllRoutes;