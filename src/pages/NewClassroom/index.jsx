import {Button, Box, Text, Link, Flex, Container, Checkbox, Heading} from "@chakra-ui/react";
import React from "react";
import {Helmet} from "react-helmet";
import Header from "../../components/Header";

export default function NewClassroom() {
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
                    <Container mt="40px"
                               gap="8px"
                               display="flex" alignSelf="stretch" flexDirection="column" alignItems="start"
                               maxW="1082px"
                               w="100%"
                               px="0px"
                               mx="auto"
                               p={{md: 0, base: "20px"}}
                    >
                        <Text ml={{md: "12px", base: "Opx"}}>Classroom ID: 123456 </Text>
                        {/*<Textarea*/}
                        {/*    ml={{ md: "12px", base: "Opx" }}*/}
                        {/*    placeholder={`Add your piece's title.`}*/}
                        {/*    color="gray.600"*/}
                        {/*    bordercolor="blue_gray.100"*/}
                        {/*    w="70%"*/}
                        {/*    borderRadius="8px"*/}
                        {/*/>*/}
                    </Container>


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

                        <Box mt="26px" ml={{md: "16px", base: "0px"}} alignSelf="stretch">
                            <Flex gap="12px" alignItems={"center"}>
                                {/* icon={<Image src="images/checkbox.svg" alt="Checkbox Icon" h="16px" borderRadius={"4px"} />} */}
                                <Checkbox defaultChecked>
                                    <Text>Example Functionality (Ask Zeyu)</Text>
                                </Checkbox>
                            </Flex>
                            <Flex px={{base: "20px", sm: "28px"}}>
                                <Text color="gray.600">
                                    Explanation.
                                </Text>
                            </Flex>
                        </Box>
                        <Link href="/myclassrooms">
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
                                color="gray.100">

                                Add Classroom
                            </Button>
                        </Link>
                    </Container>
                </Flex>
            </Flex>
        </>
    );
}