import { Link } from "react-router-dom";
import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Flex,
  Spacer,
  Heading,
  ButtonGroup,
  Button,
  Box,
  Image,
  Text,
  Stack,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  InputLeftAddon,
  InputGroup
} from "@chakra-ui/react";

export const Register = () => {
  return (
    <>
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          padding: "1%",
        }}
      >
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="2">
            <Heading size="md">
              <Image
                w="40"
                src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png"
                alt="logo"
              />
            </Heading>
          </Box>
          <Spacer />
          <ButtonGroup gap="2" pr={5}>
            <Text>
              Already Registered?{" "}
              <Link to="/login">
                {" "}
                <i color="red">Login</i>
              </Link>{" "}
              here
            </Text>
          </ButtonGroup>
        </Flex>
      </div>
      <div>
        <Stack direction="row">
          <Box w={430} pt={50}>
            <Box
              mt={15}
              w={300}
              h={350}
              borderRadius={15}
              borderStyle="dashed"
              color="blue"
              border="1px"
              position="fixed"
              p={5}
            >
              <Image
                ml={20}
                src="https://static.naukimg.com/s/7/104/assets/images/green-boy.c8b59289.svg"
              />
              <Box>
                <Text fontWeight="bold" mb={5} fontSize={20}>
                  On registering, you can
                </Text>
                <Text display="flex" gap={3} color="black" fontSize={15}>
                  <CheckCircleIcon/>
                  Build your profile and let recruiters find you
                </Text>
                <Text display="flex" gap={3} color="black" fontSize={15}>
                  <CheckCircleIcon />
                  Get job postings delivered right to your email
                </Text>
                <Text display="flex" gap={3} color="black" fontSize={15}>
                  <CheckCircleIcon />
                  Find a job and grow your career
                </Text>
              </Box>
            </Box>
          </Box>

          <Box
            w="full"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            <Stack direction="row">
              <Box w="full" p={20}>
                <Text mb={25} fontSize={35} fontWeight="bold">
                  Find a job & grow your career
                </Text>

                <Grid templateRows="repeat(5, 1fr)" gap={6}>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel>Full Name</FormLabel>
                      <Input type="password" placeholder="What is your name?" />
                    </FormControl>
                  </GridItem>

                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel>Email Id / Username</FormLabel>
                      <Input
                        type="email"
                        placeholder="Tell us your Email Id / Username"
                      />
                      <FormLabel fontWeight={400} fontSize={13}>
                      We'll send you relevant jobs in your mail
                      </FormLabel>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel>password</FormLabel>
                      <Input
                        type="password"
                        placeholder="Create a password for your account"
                      />
                      <FormLabel fontWeight={400} fontSize={13}>
                        Minimum 6 characters required
                      </FormLabel>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel>Mobile Number</FormLabel>
                      <InputGroup>
                        <InputLeftAddon children="+91" />
                        <Input type="tel" placeholder="phone number" />
                      </InputGroup>
                      <FormLabel fontWeight={400} fontSize={13}>Recruiters will call you on this number</FormLabel>
                    </FormControl>
                  </GridItem>

                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel>Work Status</FormLabel>
                      <Stack direction="row">
                        <Stack
                          direction="row"
                          border="1px"
                          p={3}
                          borderTopRightRadius={6}
                          borderTopLeftRadius={15}
                          borderBottomLeftRadius={6}
                          borderBottomRightRadius={15}
                          color="blue"
                        >
                          <Box mt={2} fontSize={30}>
                            💼
                          </Box>
                          <Box>
                            <Text mt={2} fontWeight="bold" fontSize={15}>
                              I'm Experienced
                            </Text>
                            <Text color="black" fontSize={13} fontWeight="bold">
                              I have work experience (excluding internships)
                            </Text>
                          </Box>
                        </Stack>
                        <Stack
                          border="1px"
                          direction="row"
                          p={3}
                          borderTopRightRadius={6}
                          borderTopLeftRadius={15}
                          borderBottomLeftRadius={6}
                          borderBottomRightRadius={15}
                          color="blue"
                        >
                          <Box mt={4} fontSize={30}>
                            🎒
                          </Box>
                          <Box>
                            <Text mt={2} fontWeight="bold" fontSize={15}>
                              I'm a Fresher
                            </Text>
                            <Text color="black" fontSize={13} fontWeight="bold">
                              I am a student/ Haven't worked after graduation
                            </Text>
                          </Box>
                        </Stack>
                      </Stack>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}></GridItem>
                  <GridItem colSpan={1}>
                    <FormLabel>Upload Resume</FormLabel>
                    <Box>
                      <Button color="gray" pl={0} borderRadius="full">
                        <Button
                          colorScheme="red"
                          borderRadius="full"
                          mr={2}
                          border="1px"
                        >
                          Upload Resume
                        </Button>
                        DOC, DOCx, PDF, RTF | Max: 2 MB
                      </Button>
                      <Text mt={5}>
                        Recruiters give first preference to candidates who have
                        a resume
                      </Text>
                    </Box>
                  </GridItem>
                  <GridItem colSpan={1}>
                   <Text fontWeight="bold">Send me important updates on 📲WhatsApp</Text>
                  </GridItem>
                  <GridItem textAlign="left" colSpan={1}>
                    <Text fontSize={13}>
                      By clicking Register, you agree to the Terms and
                      Conditions & Privacy Policy of Naukri.com
                    </Text>
                    <Button borderRadius="full" colorScheme="blue">
                      Register Now
                    </Button>
                  </GridItem>
                </Grid>
              </Box>
              <Box pt={20} w={260} h={400}>
                <Box borderLeft="1px" direction="column" mt={59}>
                  <Box pt={20} pb={20} mt={59} mb={59} pl={10}>
                    <Text>Continue with</Text>
                    <Button
                      colorScheme="white"
                      border="1px"
                      borderRadius="20"
                      color="blue"
                    >
                      <Image
                        borderRadius="full"
                        mr={2}
                        w={8}
                        src="data:image/png;base64,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"
                        alt=""
                      />
                      Google
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </div>
    </>
  );
};
