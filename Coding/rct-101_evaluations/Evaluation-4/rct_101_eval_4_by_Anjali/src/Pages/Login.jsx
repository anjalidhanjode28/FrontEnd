import React, { useContext, useState } from "react";
import {Container,Stack,Box,Button,Input,AlertIcon,Alert,Spinner} from "@chakra-ui/react"
import axios from "axios"
import {Navigate} from "react-router-dom"
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";
import { loginFailure, loginRequest, loginSuccess } from "../Context/AuthContext/action";



const getResponse = (data)=>{
  return axios.post(`https://reqres.in/api/login`,data)
}

const Login = () => {
  const {authState,authDispatch}=useContext(AuthContext)
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")


  // console.log(authState)

  const clickhandler=()=>{
    // console.log(email,password)
    const data={email:email,password:password}
    authDispatch(loginRequest(true))
    authDispatch(loginFailure(false))
    getResponse(data).then((res)=>{
      // console.log(res)
      authDispatch(loginSuccess(res.data.token))
      authDispatch(loginRequest(false))
      authDispatch(loginFailure(false))
      
    })
    .catch((err)=>{
      console.log(err)
      authDispatch(loginFailure(true))
      authDispatch(loginRequest(false))

    })
  }

  if(authState.authstatus){
    return <Navigate to="/" />
  }




  return (
    <>
    <Container >
      {authState.isError &&  <Alert status='error'>
    <AlertIcon />
    Something went wrong. please refresh.  </Alert>}
      <Stack alignItems={"center"}>
      <Box w="100%">
      
      <Input
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder='Enter Email'
        type={"email"}
        size='sm'
      />
      </Box>
      <Box w="100%">
      
      <Input
        value={password}
        type="password"
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Enter Password'
        size='sm'
      />
      </Box>
      <Box>
        <Button type="submit" onClick={clickhandler}>{authState.isLoading?(<Spinner color='red.500' />):"Submit"}</Button>
      </Box>
      </Stack>
    </Container>
    </>
  );
};

export default Login;


// "email": "eve.holt@reqres.in",
//     "password": "cityslicka"