import { Heading, Image, Flex } from "@chakra-ui/react";
import React from
    "react";
export default function HomeButton({text, imgsrc, ...props }) {
    return (
        <Flex
            {...props}
            bordercolor="black.900_0c"
            borderWidth="1px"
            borderStyle="solid" bg="gray. 100"
            w={{ md: "32%", base: "100%" }} flexDirection="column" alignItems="center" justifyContent="center" p="6px"
            borderRadius="40px"
        > <Flex zIndex={1} position="relative" p="12рх"
            mx="18px" borderRadius="32px">
                <Image src={imgsrc} alt="Book Image" h="134px" w="100%" />
            </Flex>
            <Heading size="headingxs" as="h4" color="blue_gray.900" letterSpacing="-0.48px">
                {text} </Heading>
        </Flex>
    );
}