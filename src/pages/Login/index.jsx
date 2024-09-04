import { Helmet } from "react-helmet";
import LoginRowcommentlogin from "./LoginRowcommentlogin";
import { Button, Text, Flex, Container, Box, Link } from "@chakra-ui/react";
import React, {useContext} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../AuthContext";

export default function LoginPage() {

    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleLogin = async (username, password) => {
        try {
            // const response = await axios.post('/api/login', { username, password }); // Replace with your login API endpoint
            const response = await axios.get(`http://129.132.15.76:8008/user/info/${username}`);
            const userData = response.data;

            // authenticate password
            if (userData.password !== password) {
                throw new Error();
            }

            // Save the user data using context or localStorage
            login(userData);

            // Redirect to the home page or a protected page
            navigate('/mycustompieces');
        } catch (error) {
            console.error("Login failed:", error);
            alert("Login failed. Please check your username and password.");
        }
    };


    return (
        <>
            <Helmet>
                <title>datAR - Login</title>
            </Helmet>
            <Box bg="white.a700" w="100%">
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
                        <Link href="/" target="_blank" rel="noreferreril" alignself="center">

                        
                        <Text color="gray.100_01" px="8px" py="4px" borderRadius="8px" _hover={{
                                color: "black.900", borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomLeftRadius: 8, borderBottomRightRadius: 8, bg: "gray.100",
                            }}>Home</Text>
                        </Link>
                        <Link href="/login" target="_blank" rel="noreferreril" alignself="center">
                        <Button background="white">Login</Button>
                        </Link>
                    </Container >
                </Flex >
            </Box >
                <LoginRowcommentlogin onLogin={handleLogin} />
            </Box>
        </>
    );
}
