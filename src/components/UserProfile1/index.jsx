import { Heading, Text, Flex, Image } from "@chakra-ui/react"; import React from "react";
export default function UserProfile1({
    userImage = "images/img_image.png",
    duplicateColumnsText = "Duplicate columns",
    dataManipulationText = "Data manipulation",
    ...props
}) {
    return (<Flex
        {...props} gap="16px"
        bordercolor="blue_gray.100"
        borderWidth="1px"
        borderStyle="solid" bg="white.a700"
        W="100%"
        flexDirection="column"
        p="16px"
        borderRadius="8px"
    > <Image src={userImage} alt="Duplicate" h="246px" fit="cover" w="100%" />
        <Flex gap="8px" alignSelf="stretch" flexDirection="column" alignItems="start">
            <Flex alignSelf="stretch">
                <Text>{duplicateColumnsText}</Text>
            </Flex>
            <Heading as="h6"
                bg=" red. 100"
                justifyContent="center"
                display="flex" alignItems="center"
                p="2px"
                borderRadius="8px"
            >
                {dataManipulationText}
            </Heading>
        </Flex>
    </Flex>
    );
}