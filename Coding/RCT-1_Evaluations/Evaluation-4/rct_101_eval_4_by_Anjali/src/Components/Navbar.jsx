import React, { useContext } from "react";
import {Box,Flex} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";
// 1. Navbar should be responsive
// 2. On the left hand side; If the user has logged in; Token should be displated; else Token shouldn't be shown.
// 3. on the right hand side; There will be there different links. `HOME` `LOGIN` `CART`

const Navbar = () => {
  const {authState} =useContext(AuthContext)
  return (<Box bg="cyan.300" color={"black"} w={"100%"} p={3}>
    <Flex  minWidth='max-content' alignItems='center' justifyContent={"space-between"} gap='2'>
      <Box>Token:{authState.token}</Box>
      <Flex gap={2}>
        <Link to="/">HOME</Link>
        <Link to="/login">LOGIN</Link>
        <Link to="/cart">CART</Link>
      </Flex>
      </Flex>

  </Box>);
};

export default Navbar;
