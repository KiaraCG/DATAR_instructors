import { Heading, Text, Flex, Image } from "@chakra-ui/react"; import React from "react";
export default function UserProfile1({
    userImage = null,
    duplicateColumnsText = "Duplicate columns",
    dataManipulationText = "Data manipulation",
    ...props
}) {
    const getPlaceholder = (text) => {
        if (userImage == null) {
            if (text.includes('Visualization')) {
                return 'images/placeholder_purple.png';
            } else if (text.includes('Data manipulation')) {
                return "images/placeholder_red.png";
            } else if (text.includes('CSV')) {
                return "images/piece_placeholder.png";
            } else {
                throw new Error("Not a valid text.");
            }
        } else {
            return {userImage};
        }
    };

    const getBackgroundColor = (text) => {
        if (text.includes('Visualization')) {
            return 'purple.100';
        } else if (text.includes('Data manipulation')) {
            return 'red.100';
        } else if (text.includes('CSV')) {
            return 'teal.400_47';
        } else {
            return 'white.a700';
        }
    };

    return (<Flex
        {...props} gap="16px"
        bordercolor="blue_gray.100"
        borderWidth="1px"
        borderStyle="solid" bg="white.a700"
        W="100%"
        flexDirection="column"
        p="16px"
        borderRadius="8px"
    > <Image src={getPlaceholder(dataManipulationText)} alt="Duplicate" h="246px" fit="cover" w="100%" />
        <Flex gap="8px" alignSelf="stretch" flexDirection="column" alignItems="start">
            <Flex alignSelf="stretch">
                <Text>{duplicateColumnsText}</Text>
            </Flex>
            <Heading as="h6"
                bg="red.a100"
                justifyContent="center"
                display="flex" alignItems="center"
                p="2px"
                fontSize="16px"
                borderRadius="8px"
                background={getBackgroundColor(dataManipulationText)}
            >
                {dataManipulationText}
            </Heading>
        </Flex>
    </Flex>
    );
}