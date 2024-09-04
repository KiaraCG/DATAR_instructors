import { Heading, Box } from "@chakra-ui/react";
import React from "react";
export default function AboutSection() {
    return (
        <>
            {/* about section */}
            <Box mt="122px" alignSelf="stretch" px={{
                md: "56px"
                , base: "20px"
            }
            }>
                <Heading as="h1" color="black.900" letterSpacing="-1px" textAlign="center" lineHeight="120%" fontWeight={900} fontSize="50px" >
                    <Heading as="span" color="black.900">
                        About the&nbsp;
                    </Heading>
                    <Heading as="span" color="green.a700">
                        datAR
                    </Heading>
                    <Heading
                        as="span"
                        color="black.900">
                        <>
                            &nbsp;Project <br />
                        </>
                    </Heading>
                    <Heading
                        as="span" color="black.900" fontSize="16px" fontWeight={400}>
                        <>
                            <br />
                        </>
                    </Heading >
                    <Heading as="p" color="black.900" letterSpacing="-1.48px" fontSize="24px" fontWeight={200} style={{ lineHeight: '32px' }}>
                        Data literacy, defined as the ability to work with and understand data, is an essential competency for the younger generation.
                        However, the traditional plugged approach, where students primarily use computers and begin with pre-existing datasets often lacks hands-on engagement and real-world relevance.
                        We present datAR, a tablet-based data analysis application that enables learners to explore real-world data embedded in everyday objects through augmented reality and tangible programming.
                        <br />
                        <br />
                    </Heading>
                </Heading >
            </Box >
        </>
    );
}