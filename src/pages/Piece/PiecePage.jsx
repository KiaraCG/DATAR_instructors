import {Image, Heading, Box, Flex, Text, Button, Container } from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {SelectBox} from "../../components/SelectBox";
import {useLocation} from "react-router-dom";
import ReadOnlyPythonEditor from "./ReadOnlyPythonEditor";
import ReadOnlyCSV from "./ReadOnlyCSV";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

// should be gotten dynamically
let user_id = 1;


export default function PiecePage() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const username = params.get('username');
    const categoryTitle = params.get('categoryTitle');
    const fileType = params.get('fileType');
    const filename = params.get('filename');
    const description = params.get('description');
    const fileId = params.get('fileId');
    // const downloadCount = params.get('downloadCount');

    const navigate = useNavigate();
    const [selectedclass, setSelectedclass] = useState(0);

    // handle assigning to classroom
    const [classrooms, setClassrooms] = useState([]);

    useEffect(() => {
        axios.get(`http://129.132.15.76:8008/classrooms/lecturer/${user_id}`)
            .then(response => {
                setClassrooms(response.data.map(d => d.id));
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [user_id]);

    const addToClass = async () => {
        const jsonData = {
            file_id: fileId,
            classroom_id: selectedclass,
        };
        try {
            const response = await axios.post('http://129.132.15.76:8008/file_classroom', jsonData, {
                headers: {
                    'Content-Type': 'application/json',  // Set the content type to JSON
                },
            });
            await axios.post('http://129.132.15.76:8008/file/download_count/'+fileId);
            console.log('Response:', response.data);
            navigate('/myclassrooms');
            // Redirect or show success message
        } catch (error) {
            if (error.response) {
                console.error('Error response:', error.response.data);
                console.error('Status:', error.response.status);
                console.error('Headers:', error.response.headers);
            } else if (error.request) {
                console.error('Error request:', error.request);
            } else {
                console.error('Error message:', error.message);
            }
        }
    }
    // handle dynamic fetching of piece
    const getBody = ()=> {
        if (fileType.includes('visualization') || fileType.includes('manipulation')) {
            return (<ReadOnlyPythonEditor path={'http://129.132.15.76:8008/'+filename}/>
            );
        } else if (fileType.includes('data')) {
            return <ReadOnlyCSV path={'http://129.132.15.76:8008/'+filename}/>;
        } else {
            throw new Error("Not a valid filename.");
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
                            {/*<Button*/}
                            {/*    size="xs"*/}
                            {/*    // rightIcon={<Image src="images/img_pen_tool.svg" alt="Pen Tool"/>}*/}
                            {/*    gap="8px"*/}
                            {/*    minW="60px"*/}
                            {/*    color="gray.100">*/}
                            {/*    Edit*/}
                            {/*</Button>*/}
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

                                        options={classrooms.map(id => (
                                            {label: "Classroom ID: " + id.toString(), value: id}))}
                                        style={{
                                            gap: "16px",
                                            borderColor: "blue_gray.100",
                                            borderWidth: "0.5px",
                                            borderStyle: "solid",
                                        }}
                                        minW="230px"
                                        w={{ md: "20%", base: "100%" }}
                                        value={selectedclass}
                                        onChange={(e) => setSelectedclass(e.target.value)}
                                    />
                                </Flex>
                            </Box>
                            <Button minW="270px" w={{ md: "32%", base: "100%" }} color="gray.300" mr="30px" onClick={addToClass}>
                                Add Custom Piece to Classroom
                            </Button>
                        </Container>
                    </Flex>

                </Container>

            </Box>

        </>
    )
        ;
}
