import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";

const Login = () => {

  const isLoading = useSelector((state) => state.AuthReducer.isLoading);
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const comingFrom = location.state?.from?.pathname || "/";


  const handleSubmit = (e) => {
    e.preventDefault();

    if(email && password){
      dispatch(login({email, password}))
      .then((res) => {
        navigate(comingFrom, {replace: true});
      });
    }
  };


  return (
    <div data-testid="login">
      <h2 style={{textAlign: "center"}}>LOGIN</h2>
      <form
        style={{textAlign: "center", fontSize: '24px'}}
        onSubmit={handleSubmit}
        >
        <div>
          <label>User Email</label>
          <br />
          <input 
            data-testid="login-email" 
            type="email"
            value={email}
            style={{
              fontSize: '20px',
            }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={{marginTop: '1rem'}}>
          <label>User Password</label>
          <br />
          <input 
            data-testid="login-password" 
            type="password"
            value={password}
            style={{
              fontSize: '20px',
            }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button 
          type="submit" 
          data-testid="login-submit"
          style={{
            textAlign: 'center',
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            outline: 'none',
            padding: '8px 8px',
            marginTop: '1rem',
            width: '220px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '20px',
          }}
        >
          {isLoading ? "Loading" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
