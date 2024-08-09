import {Image, Heading, Box, Flex, Text, Button, Container, Link} from "@chakra-ui/react";
import React from "react";
import {SelectBox} from "../../components/SelectBox";
import {useLocation} from "react-router-dom";
import ReadOnlyPythonEditor from "./ReadOnlyPythonEditor";
import ReadOnlyCSV from "./ReadOnlyCSV";

// should be gotten dynamically
let classIDs = [123456, 987654, 673786, 382764];
const classroomList = classIDs.map(id => (
    {label: "Classroom ID: " + id.toString(), value: id}));

export default function PiecePage() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const username = params.get('username');
    const categoryTitle = params.get('categoryTitle');
    const fileType = params.get('fileType');
    // const downloadCount = params.get('downloadCount');

    // dynamic params -> params.get('description');
    const description = "This python script creates a 3D barchart for your chosen 3 columns in the dataset. Please change the input data accordingly."

    const getBody = ()=> {
        if (fileType.includes('visualization') || fileType.includes('manipulation')) {
            return (<ReadOnlyPythonEditor path={"codepieces/sample.py"}/>
            );
        } else if (fileType.includes('data')) {
            return <ReadOnlyCSV path={"codepieces/snacks.csv"}/>;
        } else {
            throw new Error("Not a valid text.");
        }
    };

    return (
        <>
            <Box h="862px"
                 mb="4px" position="relative" px={{md: "64px", base: "20px"}}
                 mr="px"
            >

                <Container
                    gap="24px"
                    flex={1} display="flex"
                    flexDirection="column" position="absolute"
                    top="0px"
                    right="Opx"
                    left="Opx"
                    px="Opx"
                    my="auto">

                    {/* Title and description */}

                    <Flex gap="10px" flexDirection="column">
                        <Flex gap="10px"
                              flexDirection="column" alignItems="start">
                            <Button
                                size="xs"
                                // rightIcon={<Image src="images/img_pen_tool.svg" alt="Pen Tool"/>}
                                gap="8px"
                                minW="60px"
                                color="gray.100">
                                Edit
                            </Button>
                            <Flex alignSelf="stretch">
                                <Heading letterSpacing="-0.96px"> {categoryTitle} </Heading>
                            </Flex>
                        </Flex>

                        <Flex mr="100px">
                            <Text color="gray.600" as={"div"}>
                                {description}
                                <Text>
                                    {username}
                                </Text>

                            </Text>
                        </ Flex>

                    </Flex>

                    {/* Body and Add to Classroom */}

                    <Flex
                        gap="24px"
                        alignItems="start"
                        flexDirection="column"
                        mr="100px"
                        position="relative"
                    >
                        {getBody()}

                        <Container
                            flex={1}
                            display="flex"
                            flexDirection="column"
                            alignItems="end"
                            px="0px"
                            my="auto"
                        >
                            <Box
                                borderColor="blue_gray.100"
                                borderWidth="1px"
                                borderStyle="solid"
                                bg="white.a700"
                                boxShadow="xs"
                                w={{ md: "32%", base: "100%" }}
                                p="8px"
                                borderRadius="8px"
                                minW="270px"
                                mr="30px"
                            >
                                <Flex px="16px">
                                    <Heading as="h1" fontSize="16px" fontWeight={600} alignSelf="end">
                                        Please select a classroom
                                    </Heading>
                                </Flex>
                                <Flex mb="14px" flexDirection="column" borderRadius="8px">
                                    <SelectBox
                                        ml={{ md: "8px", base: "0px" }}
                                        shape="round"
                                        indicator={<Image src="images/img_arrowdown.svg" alt="Arrow Down" w="16px" h="16px" />}
                                        name="Select Classroom"
                                        placeholder={'Classroom'}
                                        options={classroomList}
                                        style={{
                                            gap: "16px",
                                            borderColor: "blue_gray.100",
                                            borderWidth: "0.5px",
                                            borderStyle: "solid",
                                        }}
                                        minW="230px"
                                        w={{ md: "20%", base: "100%" }}
                                    />
                                </Flex>
                            </Box>
                            <Link href="/myclassrooms">
                                <Button minW="270px" w={{ md: "32%", base: "100%" }} color="gray.300" mr="30px">
                                    Add Custom Piece to Classroom
                                </Button>
                            </Link>
                        </Container>
                    </Flex>

                </Container>

            </Box>

        </>
    )
        ;
}
