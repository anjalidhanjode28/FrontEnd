import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {login} from "../Redux/AuthReducer/action";
import {USER_LOGIN_SUCCESS} from "../Redux/AuthReducer/actionTypes";

const Login = () => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email && password){
            dispatch(login({email,password}))
            .then((r) => {
                if(r.type === USER_LOGIN_SUCCESS){
                    const comingFrom = location.state.from || "/";
                    // <Navigate to="/"/>
                    navigate(comingFrom,{replace: true});
                }
                console.log("After successful login",r);
            })
            setEmail("");
            setPassword("");
        };
    };


    return (
        <div>
            <h1>Login</h1>
           <form onSubmit={handleSubmit}>
                <div>
                    <label>User Email</label>
                    <input 
                        type={"email"} 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                </div>
                <div>
                    <label>User Password</label>
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                </div>
                <button type="submit">Submit</button>
           </form>
        </div>
    )
};

export default Login;