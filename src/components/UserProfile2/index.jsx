import {Text, Image, Flex, Heading, Box} from "@chakra-ui/react";
import React from "react";


export default function UserProfile2({
                                         userImage = null,
                                         user_id = "@user4",
                                         title = "Supermarkets",
                                         type = "CSV",
                                         download_count = "162",
                                         ...props
                                     }) {
    const getPlaceholder = (text) => {
        if (text.includes('visualization')) {
            return 'images/placeholder_purple.png';
        } else if (text.includes('manipulation')) {
            return "images/placeholder_red.png";
        } else if (text.includes('data')) {
            return "images/piece_placeholder.png";
        } else {
            throw new Error("Not a valid text.");
        }
    };

    const getBackgroundColor = (text) => {
        if (text.includes('visualization')) {
            return 'purple.100';
        } else if (text.includes('manipulation')) {
            return 'red.100';
        } else if (text.includes('data')) {
            return 'teal.400_47';
        } else {
            return 'white.a700';
        }
    };
    const getLabel = (text) => {
        if (text.includes('visualization')) {
            return 'Visualization';
        } else if (text.includes('manipulation')) {
            return 'Data Manipulation';
        } else if (text.includes('data')) {
            return 'CSV';
        } else {
            return '';
        }
    };
    return (
        <Flex
            {...props} gap="16px"
            borderColor="blue_gray. 100" borderWidth="1px"
            borderStyle="solid" bg="white.a700"
            w="100%"
            flexDirection="column" justifyContent="center"
            p="14px"
            borderRadius="8px"
        >
            <Box h="246px" alignSelf="stretch" position="relative" alignContent="center">
                <Image src={getPlaceholder(type)} alt="Userfour" h="246px" flex={1} fit="cover" w="100%" mx="auto"/>
                <Heading
                    size="headingxs" as="h6"
                    fontSize="14px"
                    fontWeight={600} bg="white.a700"
                    justifyContent="center"
                    display="flex"
                    position="absolute"
                    right="10px" top="9px"
                    px="8px"
                    m="auto"
                    borderRadius="8px"
                >
                    @user{user_id}
                </Heading>
            </Box>

            <Box h="52px"
                 alignSelf="stretch"
                 position="relative">
                <Flex
                    gap="8px"
                    flex={1}
                    flexDirection="column" alignItems="start" position="absolute"
                    left="0px"
                    bottom="0px" right="Opx" top="Opx"
                    h="max-content"
                    m="auto"
                >
                    <Text>{title}</Text>
                    <Heading as="h6"
                             bg="teal.400_47" justifyContent="center"
                             display="flex" alignItems="center"
                             p="2px"
                             fontSize="16px"
                             borderRadius="8px"
                             background={getBackgroundColor(type)}>
                        {getLabel(type)}
                    </Heading>
                </Flex>
                <Flex gap="8px" alignItems="center" position="absolute" bottom="-1px" right="0px" m="auto"
                      borderRadius="8px">
                    <Image src="images/download.svg" alt="Image" h="16px" w="16px"/>
                    <Text color="blue_gray.900_01">{download_count}</Text>
                </Flex>
            </Box>
        </Flex>
    );
}