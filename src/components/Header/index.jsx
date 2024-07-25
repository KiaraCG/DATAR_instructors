import { Text, Link, UnorderedList, ListItem, Container, Flex } from "@chakra-ui/react";
import React from "react";
export default function Header({ ...props }) {
    return (
        <Flex
            {...props} borderColor="blue_gray. 100" borderBottomWidth="1px"
            borderStyle="solid" bg="green.a700"
            alignItems="flex-end"
            py={{ base: "20px", sm: "24px" }}
            as="header"
        > <Container display="flex" justifyContent="flex-end" px="10px" p={{ md: 0, base: "20px" }}>
                <UnorderedList styleType="none" gap="8px" display="flex" alignItems="flex-end" flexWrap="wrap">
                    <ListItem>
                        <Link href="/myclassrooms" bg="gray.100" justifyContent="center" display="flex" alignItems="flex-end">
                            <Text color="black.900" px="8px" py="4px" borderRadius="8px">
                                My Classrooms
                            </Text>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="/mypieces"
                            cursor="pointer">
                            <Text
                                color="gray.100_01"
                                px="8px"
                                py="4px"
                                _hover={{
                                    color: "black.900", borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomLeftRadius: 8, borderBottomRightRadius: 8, bg: "gray.100",
                                }}
                            >
                                My Pieces </Text>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="/browsepieces"
                            cursor="pointer">
                            <Text
                                color="gray.100_01" px="8px"
                                py="4px"
                                _hover={{
                                    color: "black.900", borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomLeftRadius: 8, borderBottomRightRadius: 8, bg: "gray.100",
                                }}
                            > Browse Pieces
                            </Text>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="/"
                            cursor="pointer">
                            <Text
                                color="white.a700" px="8px"
                                py="4px"
                                _hover={{
                                    color:
                                        "black. 900", borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomLeftRadius: 8, borderBottomRightRadius: 8, bg: "gray.100",
                                }}
                            >
                                Home
                            </Text>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="/"
                            cursor="pointer">
                            <Text
                                color="gray.100_01"
                                px="8px"
                                py="4px"
                                hover={{
                                    color: "black, 900", borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomLeftRadius: 8, borderBottomRightRadius: 8, bg: "gray.100",
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