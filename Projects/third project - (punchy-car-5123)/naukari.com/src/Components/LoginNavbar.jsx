import {
  Flex,
  Spacer,
  Box,
  Heading,
  Button,
  ButtonGroup,
  Image,
  Stack,
  InputGroup,
  Input,
  InputRightAddon,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { Companies } from "./CompaniesHover";
import { Jobs } from "./JobsHover";
import { Services } from "./ServicesHover";
import { ForEmployers } from "./ForEmployers";

export const LoginNavbar = () => {
  return (
    <>
      <Flex
        bg="white"
        w="98%"
        border="1px"
        borderColor="blue"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        }}
        minWidth="max-content"
        alignItems="center"
        gap="2"
        p={15}
        position="fixed"
      >
        <Box p="2">
          <Heading size="md">
            <Image
              w="40"
              src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png"
              alt="logo"
            />
          </Heading>
        </Box>
        <Box>
          <Stack direction="row" gap={0}>
            <Box>
              <Link to="/job" fontWeight="500">
                <Jobs />
              </Link>
            </Box>
            <Box>
              <Link to="/company" fontWeight="500">
                <Companies />
              </Link>
            </Box>
            <Box>
              <Link to="/service" fontWeight="500">
                <Services />
              </Link>
            </Box>
          </Stack>
        </Box>
        <Box>
          <InputGroup size="sm">
            <Input w={40} placeholder="Search Jobs here" />
            <InputRightAddon fontSize={20} children={<Search2Icon />} />
          </InputGroup>
        </Box>
        <Box>
          <ButtonGroup gap="2">
            <Button
              colorScheme="lightgray"
              border="1px"
              borderColor="blue"
              borderRadius="3xl"
              fontSize="xl"
              fontWeight="500"
              p={4}
              color="blue"
            >
              <Link to="/login">Login</Link>
            </Button>
            <Button
              colorScheme="orange"
              borderRadius="3xl"
              fontSize="xl"
              p={4}
              fontWeight="500"
            >
              <Link to="/register">Register</Link>
            </Button>

            <Box borderLeft="1px" borderColor="black">
              <ForEmployers />
            </Box>
          </ButtonGroup>
        </Box>
      </Flex>
    </>
  );
};
