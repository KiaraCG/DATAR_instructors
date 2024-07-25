import HomeButton from "../../components/HomeButton";
import { Box, Flex } from "@chakra-ui/react";
import React, { Suspense } from "react";
export default function HomeSection1() {
    return (
        <>
            {/* home section */}
            <Flex mt="70px" alignSelf="stretch" justifyContent="center" px={{ md: "56px", base: "20px" }}>
                <Flex gap="40px" w="100%" maxW="820px" mx="auto" flexDirection={{ md: "row", base: "column" }}>
                    <Suspense fallback={<div>Loading feed...</div>}>
                        {[...Array(3)].map((d, index) => (
                            <HomeButton key={"homeList" + index} />
                        ))}
                    </Suspense>
                </Flex>
            </Flex>
        </>
    );
}