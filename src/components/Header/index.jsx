import { Text, Link, UnorderedList, ListItem, Container, Flex } from "@chakra-ui/react";
import React from "react";


export default function Header({page=3,...props}) {

    const getBackgroundColors = () => {
        if (page === 0) {
            return ["gray.100","","","",""];
        } else if (page === 1) {
            return ["","gray.100","","",""];
        } else if (page===2) {
            return ["","","gray.100","",""];
        } else if (page===3) {
            return ["","","","gray.100",""];
        } else if (page === 4) {
            return ["", "", "", "", "gray.100"];
        } else {
            return ["","","","",""];
        }
    };
    const getTextColors = () => {
        if (page === 0) {
            return ["black.900","gray.100_01","gray.100_01","gray.100_01","gray.100_01"];
        } else if (page === 1) {
            return ["gray.100_01","black.900","gray.100_01","gray.100_01","gray.100_01"];
        } else if (page===2) {
            return ["gray.100_01","gray.100_01","black.900","gray.100_01","gray.100_01"];
        } else if (page===3) {
            return ["gray.100_01","gray.100_01","gray.100_01","black.900","gray.100_01"];
        } else if (page === 4) {
            return ["gray.100_01","gray.100_01","gray.100_01","gray.100_01","black.900"];
        } else {
            return ["gray.100_01","gray.100_01","gray.100_01","gray.100_01","gray.100_01"];
        }
    };

    return (
        <Flex
            {...props} borderColor="blue_gray. 100" borderBottomWidth="1px"
            borderStyle="solid" bg="green.a700"
            alignItems="flex-end"
            py={{ base: "20px", sm: "24px" }}
            as="header"
        > <Container display="flex" justifyContent="flex-end" px="10px" p="0" mr="10px" ml="10px">
                <UnorderedList styleType="none" gap="8px" display="flex" alignItems="flex-end" flexWrap="wrap">
                    <ListItem>
                        <Link href="/myclassrooms" justifyContent="center" display="flex" alignItems="flex-end"
                              _hover={{color:"white"}}>
                            <Text color={getTextColors()[0]} px="8px" py="4px" borderRadius="8px"
                            bg={getBackgroundColors()[0]}
                            _hover={{
                                color: "black.900", borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomLeftRadius: 8, borderBottomRightRadius: 8, bg: "gray.100",
                            }}>
                                My Classrooms
                            </Text>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="/mycustompieces"
                            cursor="pointer"
                              _hover={{color:"white"}}>
                            <Text
                                color={getTextColors()[1]}
                                px="8px"
                                py="4px"
                                borderRadius="8" 
                                bg={getBackgroundColors(page)[1]}
                                _hover={{
                                    color: "black.900", borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomLeftRadius: 8, borderBottomRightRadius: 8, bg: "gray.100",
                                }}                
                            >
                                My Pieces </Text>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="/browsecustompieces"
                            cursor="pointer"
                              _hover={{color:"white"}}>
                            <Text
                                color={getTextColors()[2]} px="8px"
                                py="4px"
                                borderRadius="8px"
                                bg={getBackgroundColors(page)[2]}
                                _hover={{
                                    color: "black.900", borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomLeftRadius: 8, borderBottomRightRadius: 8, bg: "gray.100",
                                }}
                            > Browse Pieces
                            </Text>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="/"
                            cursor="pointer"
                              _hover={{color:"white"}}>
                            <Text
                                color={getTextColors()[3]} px="8px"
                                py="4px"
                                borderRadius="8px"
                                bg={getBackgroundColors(page)[3]}
                                _hover={{
                                    color: "black.900", borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomLeftRadius: 8, borderBottomRightRadius: 8, bg: "gray.100",
                                }}
                            >
                                Home
                            </Text>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="/"
                            cursor="pointer"
                              _hover={{color:"white"}}>
                            <Text
                                color={getTextColors()[4]}
                                px="8px"
                                py="4px"
                                borderRadius="8px"
                                bg={getBackgroundColors(page)[4]}
                                _hover={{
                                    color: "black.900", borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomLeftRadius: 8, borderBottomRightRadius: 8, bg: "gray.100",
                                }}
                            > Logout
                            </Text>
                        </Link>
                    </ListItem>
                </UnorderedList>
            </Container>
        </Flex>
    );
}