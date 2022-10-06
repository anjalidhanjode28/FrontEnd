import React from "react";
// import {  } from '@chakra-ui/icons'

import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  Center,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useState,useContext } from "react";
import {loginFailureAction,loginSuccessAction} from "../Context/AuthContext/action";
import {AuthContext} from "../Context/AuthContext/AuthContextProvider";
import { Navigate } from "react-router-dom";
import axios from "axios";


const Login = () => {
  const {state,dispatch} = useContext(AuthContext);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const {name,value} = e.target;
    setLoginDetails({...loginDetails, [name]: value });
  };

  const handleLogin = () => {
    axios({
      method: "POST",
      url: `https://reqres.in/api/login`,
      data: loginDetails,
    })
    .then((res) => {
      dispatch(loginSuccessAction(res.data.token));
    })
    .catch(() => {
      dispatch(loginFailureAction());
    });
  };

  if(state.isAuth){
    return <Navigate to="/" />;
  }

  if(state.isError){
    return (
      <Container
      width={{
        base: "full",
        sm: "full",
        md: "container.xl",
        lg: "container.lg",
      }}
      centerContent={true}
      >
        <Alert
          status="error"
          py={{base: 4, sm: 4, md: 4, lg: 6}}
          my={{base: 24, sm: 24, md: 28, lg: 40}}
          px={{base: 1, sm: 1, md: 4, lg: 6}}
        >
          <AlertIcon/>
          <AlertDescription>
            Something went wrong, please refresh.
          </AlertDescription>
        </Alert>
      </Container>
    );
  }

  const {email, password} = loginDetails;

  return (
    <Container
      width={{
      base: "full",
      sm: "full",
      md: "container.xl",
      lg: "container.lg",
    }}
    centerContent={true}
    >
    <VStack 
      width="full"
      boxShadow="lg"
      py={{base: 4, sm: 4, md: 4, lg: 6}}
      my={{base: 24, sm: 24, md: 28, lg: 40}}
      px={{base: 1, sm: 1, md: 4, lg: 6}}
      >
        <FormControl>
          <FormLabel>Email Address</FormLabel>
          <Input
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
          />
          <FormHelperText>We will never share your email.</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
          />
          <FormHelperText>We will never share your email.</FormHelperText>
        </FormControl>

        <FormControl>
          <Center>
            <Button
              variant="outline"
              colorScheme="gray"
              mt={4}
              onClick={handleLogin}
              isLoading={state.isLoading}
              >
              LOGIN
            </Button>
          </Center>
        </FormControl>
      </VStack>
    </Container>
  );
};

export default Login;
