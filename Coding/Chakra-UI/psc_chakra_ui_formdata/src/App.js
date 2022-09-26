import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Flex, Box, Heading, Spacer, ButtonGroup, HStack,  } from "@chakra-ui/react";
import Home from './Pages/Home';
import Example from './Pages/Example';
// import { Link } from '@chakra-ui/react';


function App() {
  return (
    <>
      <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box>
            <Heading size="md">Chakra App</Heading>
          </Box>
          <Spacer/>
          <HStack>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
          </HStack>
      </Flex>
      
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/dashboard" element={<Example/>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
