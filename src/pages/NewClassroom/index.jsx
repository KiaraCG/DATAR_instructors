import {Button, Text, Flex, Container, Heading, Textarea} from "@chakra-ui/react";
import React, {useState} from "react";
import {Helmet} from "react-helmet";
import Header from "../../components/Header";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

// TODO: fetch dynamically
let user_id = 1;

export default function NewClassroom() {
    const [classname, setClassname] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async () => {

        const jsonData = {
            lecturer_id: user_id,
            created_at: "2024-09-03T00:00:00",
            modified_at: "2024-09-03T00:00:00",
            name: classname
        };
        try {
            const response = await axios.post(`http://129.132.15.76:8008/classrooms/`, jsonData, {
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            console.log('Response:', response.data);

            navigate('/myclassrooms');

        } catch (error) {
            if (error.response) {
                console.error('Error response:', error.response.data);
                console.error('Status:', error.response.status);
                console.error('Headers:', error.response.headers);
            } else if (error.request) {
                console.error('Error request:', error.request);
            } else {
                console.error('Error message:', error.message);
            }
        }
    };

    return (
        <>
            <Helmet>
                <title>datAR - Add a new classroom</title>
            </Helmet>
            <Flex gap="14px" bg="white.a700" w="100%" flexDirection="column">
                <Header page={1}/>
                <Flex mb="4px" flexDirection="column" alignItems="center">
                    <Flex bg="white.a700" alignSelf="stretch" px={{md: "0px", base: "20px"}}> <Container mt="60px"
                                                                                                         w="100%"
                                                                                                         display="flex"
                                                                                                         maxW="1072px"
                                                                                                         px="0px"
                                                                                                         mx="auto">
                        <Heading as="h1"
                                 ml={{md: "12px", base: "Opx"}} letterSpacing="—0.48px">
                            New Classroom </Heading>
                    </Container>
                    </Flex>


                    <Container
                        mt="48px"
                        gap="4px"
                        display="flex"
                        alignSelf="stretch"
                        flexDirection="column"
                        alignItems="start"
                        maxW="1080px"
                        w="100%"
                        px="0px"
                        mx="auto"

                        p={{md: 0, base: "20px"}}
                    >

                        <Container mt="40px" gap="8px" display="flex" alignSelf="stretch" flexDirection="column"
                                   alignItems="start" maxW="1082px" w="100%" px="0px" mx="auto"
                                   p={{md: 0, base: "20px"}}>
                            <Text ml={{md: "12px", base: "0px"}}>Classroom Name</Text>
                            <Textarea
                                ml={{md: "12px", base: "0px"}}
                                placeholder={`Add your classroom's name.`}
                                color="gray.600"
                                borderColor="blue_gray.100"
                                w="70%"
                                borderRadius="8px"
                                value={classname}
                                onChange={(e) => setClassname(e.target.value)}
                            />
                        </Container>
                        <Button
                            variant="fill"
                            mt="70px"
                            ml={{
                                md: "10px",
                                base:
                                    "20px"
                            }}
                            alignSelf="start"
                            minW="394px"
                            color="gray.100"
                            onClick={handleSubmit}>
                            Add Classroom
                        </Button>
                    </Container>
                </Flex>
            </Flex>
        </>
    );
}