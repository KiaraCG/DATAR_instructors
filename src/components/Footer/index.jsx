import { Heading, Flex, Container } from "@chakra-ui/react";
export default function Footer({ ...props }) {
    return (
        <Flex
            {...props}
            as="footer"
            bg="green.a700"
            justifyContent="center" alignItems="start" px={{
                base: "20px", sm:"30px"
            }}
            py={{
                md: "68px",
                base:
                    "20px"
            }}
        >
            <Container
                mb="'12px"
                gap="20px"
                display="flex"
                w="100%"
                justifyContent="center"
                alignItems="center"
                maxW="1096px"
                px="Opx"
                mx="auto"
                flexDirection={{ md: "row", base: "column" }}
            >
                <Flex
                    flex={1}
                    justifyContent="space-between"

                    alignItems="stretch"

                    gap="80px"
                    alignSelf={{ md: "auto", base: "stretch" }}
                    flexDirection={{ md: "row", base: "column" }}
                >
                    <Heading size="headingxs" as="h4" mb=" 58px" letterSpacing="-0.48px" alignself={{ md: "end", base: "auto" }} >
                        How does it work?
                    </Heading>
                    <Flex gap="26px" w={{ md: "34%", base: "100%" }} flexDirection="column" alignItems="start">
                        <Heading size="headingxs" as="h4" letterSpacing="-0.48px">
                            Our Publications
                        </Heading>
                        <Heading as="h1" letterSpacing="-2.16px" lineHeight="120%">
                            <>
                                VL-HCC Demonstration
                                <br />
                                CHI Paper
                            </>
                        </Heading>
                    </Flex>
                    <Flex gap="24px" w={{
                        md: "18%", base:
                            "100%"
                    }} flexDirection="column" alignItems="start">
                        <Heading size="headingxs" as="h4" letterSpacing="-0.48px">The Team</Heading>
                        <Heading as="h1" letterSpacing="-2.16px" lineHeight="120%">
                            <>
                                April Wang: apwang@inf.ethz.ch
                                <br />
                                Lilian Lopez: llopez@ethz.ch
                                <br />
                                Kiara Chau: kchaugarcia@ethz.ch
                                <br />
                                Zeyu Xiong: zeyu.xiong@inf.ethz.ch
                            </>
                        </Heading>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    );
}
