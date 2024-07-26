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
                    <Heading as="h1" color="black.900" letterSpacing="-1.48px" fontSize="24px" fontWeight={200}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;5 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        <br />
                        <br />
                    </Heading>
                </Heading >
            </Box >
        </>
    );
}