import { 
         Heading,
         VStack, 
         Text, 
         GridItem, 
         Grid, 
         FormControl,
         FormLabel,
         Input, 
         Textarea,
         Select,
         Button
        } 
        from "@chakra-ui/react";

import { useState } from "react";
import Profile from "./Profile";

const initState = {
    name: "",
    phone: "",
    email: "",
    age: "",
    address: "",
    country: "",
    profile_pic: ""
};

const ProfileForm = () => {

    const [formData, setFormData] = useState(initState);
    const [ users, setUsers ] = useState([]);

    const handleChange = (e) => {
      const { name,value } = e.target;
      const val = name === 'age' ? Number(value) : value ;
      setFormData({...formData, [name]: val});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        console.log(users);
        setUsers([...users, formData]);
        setFormData(initState);
    }

  const {name, phone, email, age, address, country, profile_pic} = formData;
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bg="orange.100"
    >
      <VStack w="full" spacing={3} alignItems="flex-start">
        <Heading>Create Profile here</Heading>
        <Text>Please fill in all the details</Text>
      </VStack>

      <Grid  templateColumns="repeat(2, 1fr)" gap={2} w="full">
        <GridItem colSpan={1}>
          <FormControl isRequired onSubmit={handleSubmit}>
            <FormLabel>Name:</FormLabel>
            <Input 
                value={name}
                type="text"
                name={name}
                placeholder="User Name"
                onChange={handleChange}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl isRequired onSubmit={handleSubmit}>
            <FormLabel>Phone:</FormLabel>
            <Input 
                value={phone}
                type="text"
                name={phone}
                placeholder="phone no."
                onChange={handleChange}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl isRequired onSubmit={handleSubmit}>
            <FormLabel>Email:</FormLabel>
            <Input 
                value={email}
                type="text"
                name={email}
                placeholder="Email"
                onChange={handleChange} 
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl isRequired onSubmit={handleSubmit}>
            <FormLabel>Age:</FormLabel>
            <Input 
                value={age}
                type="number"
                name={age}
                placeholder="Age"
                onChange={handleChange}  
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl isRequired onSubmit={handleSubmit}>
            <FormLabel>Address:</FormLabel>
            <Textarea 
                value={address}
                type="text"
                name={address}
                placeholder="Address"
                onChange={handleChange}  
                resize="none"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl isRequired onSubmit={handleSubmit}>
            <FormLabel>Country:</FormLabel>
            <Select 
                name="country"
                value={country}
                onChange={handleChange}
                placeholder="Select Country"
            >
                <option value="uae">United Arab Emirates</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="china">China</option>
                <option value="bhutan">Bhutan</option>
                <option value="russia">Russia</option>
                <option value="nepaL">NepaL</option>

            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl isRequired>
            <FormLabel>Profile Pic URL:</FormLabel>
            <Input
                value={profile_pic}
                type="text"
                name={profile_pic}
                placeholder="Profile Image URL"
                onChange={handleChange}  
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <Button 
                w="full" 
                variant="outline"
            >
                Create Profile
            </Button>
          </FormControl>
        </GridItem>
      </Grid>

      <>
      {users.map((el) => {
        return <Profile
            key={el.id}
            id={el.id}
            name={el.name}
            phone={el.phone}
            email={el.email}
            age={el.age}
            address={el.address}
            country={el.country}
            profile_pic={el.profile_pic}
            />
        })}
      </>
    </VStack>
   
  );
};

export default ProfileForm;
