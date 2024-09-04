import { Heading, Text, Flex, Image } from "@chakra-ui/react"; import React from "react";
export default function UserProfile1({
    userImage = null,
                                         title = "Title",
    type = "Data manipulation",
    ...props
}) {
    const getPlaceholder = (text) => {
        if (userImage == null) {
            if (text.includes('visualization')) {
                return 'images/placeholder_purple.png';
            } else if (text.includes('manipulation')) {
                return "images/placeholder_red.png";
            } else if (text.includes('data')) {
                return "images/piece_placeholder.png";
            } else {
                throw new Error("Not a valid text.");
            }
        } else {
            return {userImage};
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

    return (<Flex
        {...props} gap="16px"
        bordercolor="blue_gray.100"
        borderWidth="1px"
        borderStyle="solid" bg="white.a700"
        w="100%"
        flexDirection="column"
        p="16px"
        borderRadius="8px"
    > <Image src={getPlaceholder(type)} alt="Duplicate" h="246px" fit="cover" w="100%" />
        <Flex gap="8px" alignSelf="stretch" flexDirection="column" alignItems="start">
            <Flex alignSelf="stretch">
                <Text>{title}</Text>
            </Flex>
            <Heading as="h6"
                bg="red.a100"
                justifyContent="center"
                display="flex" alignItems="center"
                p="2px"
                fontSize="16px"
                borderRadius="8px"
                background={getBackgroundColor(type)}
            >
                {getLabel(type)}
            </Heading>
        </Flex>
    </Flex>
    );
}