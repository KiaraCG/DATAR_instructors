import { Text, Link, Button, Container, Flex, Box } from "@chakra-ui/react";
import React from "react";
export default function HomeSection() {
    return (
        <>
            {/* home section */}
            <Box alignSelf="stretch" >
                <Flex
                    borderColor="blue_gray.100_01"
                    borderBottomWidth="1px"
                    borderStyle="solid" 
                    bg="green.a700"
                    p={{ base: "20px", sm: "24px" }}
                >
                    <Container gap="17px"
                        w="100%"
                        display="flex" justifyContent="flex-end" alignItems="center" maxW="1152px" px="8px"
                        mx="auto"
                        >
                        <Button background="white">Home</Button>
                        <Link href="/login" target="_blank" rel="noreferreril" alignself="center">
                            <Text color="gray.100_01" px="8px" py="4px" borderRadius="8px" _hover={{
                                color: "black.900", borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomLeftRadius: 8, borderBottomRightRadius: 8, bg: "gray.100",
                            }}>Login</Text>
                        </Link>
                    </Container >
                </Flex >
            </Box >
        </>
    );
}