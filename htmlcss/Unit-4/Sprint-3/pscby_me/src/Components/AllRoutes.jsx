import React from "react";
import {Routes,Route} from "react-router-dom";
import {Home} from "../Pages/Home";
import {About} from "../Pages/About";
import {Contact} from "../Pages/Contact";
import {Login} from "../Pages/Login";
import {NotFound} from "../Pages/NotFound";
import {SignleProduct} from "../Pages/SingleProduct";
import {Products} from "../Pages/Products";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            
            <Route path="/products" element={
                <PrivateRoute>
                    <Products/>
                </PrivateRoute>
            }></Route>

            <Route path="/products/:product_id" element={
                <PrivateRoute>
                    <SignleProduct/>
                </PrivateRoute>
            }></Route>

            <Route path="*" element={<NotFound/>}></Route>

        </Routes>
    );
};

export default AllRoutes;