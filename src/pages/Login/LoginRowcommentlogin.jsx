import { Text, Link, Button, Input, Flex, Heading, Container, Box } from "@chakra-ui/react";
import React from "react";

export default function LoginRowcommentlogin() {
    return (
        <Box mb="4px">
            <Flex bg="white.a700" flexDirection="column" alignItems="center" py={{ base: "20px", sm: "24px" }}>
                <Container mb="94px"
                    gap={{
                        base: "30px", sm:
                            "60px"
                    }}
                    display="flex" flexDirection="column" alignItems="start" px={{
                        md: "42px",
                        base: "20px"
                    }}
                    p={{
                        md: 0, base:
                            "20px"
                    }}>
                    <Flex
                        gap="24px"
                        alignself="'stretch"
                        borderColor="blue_gray.100"
                        borderwidth="1px"
                        borderStyle="solid" bg="white.a700"
                        flexDirection="column" alignItems="start"
                        width={"stretch"}
                        p={{ base: "20px", sm: "24px" }}
                        mx={{
                            md: "100px",
                            base: "Opx"
                        }}
                        borderRadius="8px"
                    >
                        <Flex gap="8px" alignSelf="stretch" flexDirection="column" alignItems="start">
                            <Text>Username</Text>
                            <Input placeholder={'Value'} alignSelf="stretch" borderRadius="8px" />
                        </Flex>
                        <Flex gap="8px" alignSelf="stretch" flexDirection="column" alignItems="start">
                            <Text>Password</Text>
                            <Input placeholder={`Value`} type="password" alignSelf="stretch" borderRadius="8px" />
                        </Flex>

                        <Button color="gray.100_01" size="sm" borderColor="blue_gray.900" borderWidth="1px" borderStyle="solid" alignSelf="stretch">
                            Sign In </Button>
                        <Link href="#">
                            <Text textDecoration="underline" mb="86px">
                                Forgot password?
                            </Text>
                        </Link>
                    </Flex>
                </Container>
            </Flex>
        </Box >
    );
}