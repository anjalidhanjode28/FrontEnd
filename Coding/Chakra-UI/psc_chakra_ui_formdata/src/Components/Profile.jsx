import { Center, Divider, Image, VStack } from "@chakra-ui/react";
import React from "react";

const Profile = (name,phone,email,age,address,country,profile_pic) => {
    return (
        <VStack
            w="full"
            h="full"
            p={10}
            spacing={10}
            alignItems="flex-start"
            bg="gray.100">

                <Center>
                    <Image
                        boxSize="xs"
                        src={profile_pic}
                        alt="profile_pic"
                        borderRadius="full"
                    />
                </Center>
                <Divider/>
        </VStack>
    )
}

export default Profile;