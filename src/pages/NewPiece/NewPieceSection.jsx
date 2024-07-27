import { SelectBox } from "../../components/SelectBox";
import { Button, Box, Text, Link, Flex, Image, Container, Checkbox, Textarea, Heading } from "@chakra-ui/react"; import React from "react";

const dropDownOptions = [
    { label: "CSV File", value: "option1" }, { label: "Python Visualization", value: "option2" }, { label: "Python Script for Data Manipulation", value: "option" },
];

export default function NewPieceSection() {
    return (
        <>
            <Flex mb="4px" flexDirection="column" alignItems="center">
                <Flex bg="white.a700" alignSelf="stretch" px={{ md: "0px", base: "20px" }}> <Container mt="60px" w="100%" display="flex" maxW="1072px" px="0px" mx="auto">
                    <Heading as="h1"
                        ml={{ md: "12px", base: "Opx" }} letterSpacing="—0.48px">
                        New Piece </Heading>
                </Container>
                </Flex>
                <Container mt="40px"
                    gap="8px"
                    display="flex" alignSelf="stretch" flexDirection="column" alignItems="start" maxW="1082px"
                    w="100%"
                    px="0px"
                    mx="auto"
                    p={{ md: 0, base: "20px" }}
                >
                    <Text ml={{ md: "12px", base: "Opx" }}>Title</Text>
                    <Textarea
                    ml={{ md: "12px", base: "Opx" }}
                        placeholder={`Add your piece's title.`}
                        color="gray.600"
                        bordercolor="blue_gray.100"
                        w="70%"
                        borderRadius="8px"
                    />
                </Container>
                
                <Container
                    mt="40px"
                    gap="8px"
                    display="flex" alignSelf="stretch" flexDirection="column" alignItems="start" maxW="1078px"
                    w="100%" px="Opx"
                    // m="auto"
                    p={{
                        md:
                            0, base: "20px"
                    }}
                >
                    <Text ml={{ md: "12px", base: "Opx" }} >Please select a category for your custom piece</Text>
                    <SelectBox
                    ml={{ md: "12px", base: "Opx" }}
                        shape="round"
                        indicator={<Image src="images/img_arrowdown.svg" alt="Arrow Down" w="16px" h="16px" />} name="Category Dropdown" placeholder={'Category'} options={dropDownOptions}
                        style={{
                            gap: "16px", borderColor: "blue_gray.100", borderWidth: "0.5px", borderStyle: "solid"
                        }}
                        w="70%"
                    />
                </Container>

                <Container
                    mt="48px"
                    gap="4px"
                    display="flex"
                    alignSelf="stretch"
                    flexDirection="column"
                    alignItems="start"
                    maxW="1080px"
                    w="100%"
                    px="0px"
                    mx="auto"

                    p={{ md: 0, base: "20px" }}
                >

                    <Text ml={{ md: "12px", base: "Opx" }} >Please upload the corresponding Python script or CSV file.</Text>
                    <Button 
                    ml={{ md: "12px", base: "Opx" }}
                    color={"gray.100"} leftIcon={<Image src="images/upload.png" alt="Upload" boxSize={"20px"} />} gap="2px">
                        Browse Files
                    </Button>
                </Container>
                <Container mt="40px"
                    gap="8px"
                    display="flex" alignSelf="stretch" flexDirection="column" alignItems="start" maxW="1082px"
                    w="100%"
                    px="0px"
                    mx="auto"
                    p={{ md: 0, base: "20px" }}
                >
                    <Text ml={{ md: "12px", base: "Opx" }}>Description</Text>
                    <Textarea
                        placeholder={`Add a brief description of your piece.`}
                        color="gray.600"
                        bordercolor="blue_gray.100"
                        w="70%"
                        borderRadius="8px"
                        ml={{ md: "12px", base: "Opx" }}
                    />
                </Container>

                <Container
                    mt="48px"
                    gap="4px"
                    display="flex"
                    alignSelf="stretch"
                    flexDirection="column"
                    alignItems="start"
                    maxW="1080px"
                    w="100%"
                    px="0px"
                    mx="auto"

                    p={{ md: 0, base: "20px" }}
                >
                    <Button
                        ml={{ md: "12px", base: "Opx" }}
                        gap="2px"
                        minW="210px"
                        color={"gray.100"}
                        leftIcon={<Image src="images/upload.png" alt="Upload" boxSize={"20px"} />}
                    > Add Image (Optional)
                    </Button>
                    <Flex w={{ md: "52%", base: "100%" }} px="12px" py="8px" borderRadius="8px"> <Text color="gray.600">The file should be a png or jpeg image.</Text>
                    </Flex>
                    <Box mt="26px" ml={{ md: "16px", base: "0px" }} alignSelf="stretch">
                        <Flex gap="12px" alignItems={"center"}>
                        {/* icon={<Image src="images/checkbox.svg" alt="Checkbox Icon" h="16px" borderRadius={"4px"} />} */}
                            <Checkbox defaultChecked> 
                                <Text>Make public</Text>
                            </Checkbox>
                        </Flex>
                        <Flex px={{ base: "20px", sm: "28px" }}>
                            <Text color="gray.600">
                                This allows other users to view and download your piece in the 'Browse Pieces' section.
                            </Text>
                        </Flex>
                    </Box>
                    <Link href="/mycustompieces">
                    <Button
                        variant="fill"
                        mt="70px"
                        ml={{
                            md: "10px",
                            base:
                                "20px"
                        }}
                        alignSelf="start"
                        minW="394px"
                        color="gray.100">

                        Submit Custom Piece
                    </Button>
                    </Link>
                </Container>
            </Flex>
        </>
    );
}