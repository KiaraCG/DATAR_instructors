import {
    AccordionPanel,
    Image,
    Heading,
    AccordionButton,
    Accordion,
    AccordionItem,
    Container,
    Flex,
    Box,
    SimpleGrid,
    Button, Link,
} from "@chakra-ui/react";
import UserProfile1 from "../../components/UserProfile1";
import React, {Suspense, useEffect, useState} from "react";
import axios from "axios";

let user_id = 1;

export default function MyclassroomsRowtitleFour() {
    const [data, setData] = useState([]);
    const [classids, setClassids] = useState([]);
    const [classFiles, setClassFiles] = useState([]);

    useEffect(() => {
        axios.get(`http://129.132.15.76:8008/files/`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        axios.get(`http://129.132.15.76:8008/classrooms/lecturer/${user_id}`)
            .then(response => {
                setClassids(response.data.map(d => d.id));
                const newClassFiles = classids.map(classid => ({
                    classid,
                    files: data.filter(d => d.classroom_ids.includes(classid)),
                }));
                setClassFiles(newClassFiles);
                console.log(newClassFiles);

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [user_id, data]);


    return (
        <Box mb="4px">
            <Flex flexDirection="column" alignItems="center">
                <Flex bg="white-a700" alignSelf="stretch" py={{
                    md: "62px"
                    , base: "20px"
                }}>
                    <Container display="flex" px={{base: "100px", sm: "40px"}} p={{
                        md:
                            "20px", base: "20px"
                    }}>
                        <Flex gap="10px" w="100%" flexDirection="column" alignItems="start">
                            <Heading size="headingmd" as="h1" letterSpacing="-0.48px">
                                @user{user_id}
                            </Heading>
                            <Flex mb="84px" alignSelf="stretch">
                                <Heading
                                    size="headings" letterSpacing="-0.96px">
                                    My Classrooms
                                </Heading>
                            </Flex>
                        </ Flex>
                    </Container>
                </Flex>
                <Container mt="-86px" position="relative" px={{base: "20px", md: "100px", sm: "40px"}}
                           p={{md: "20px", base: "20px"}}>
                    <Accordion gap="16px" display="flex" flexDirection="column" allowToggle>

                        {classids.map((id) => (
                            <AccordionItem key={id}>
                                {(props) => (
                                    <>
                                        <AccordionButton
                                            borderColor="blue_gray.100" borderWidth="1px"
                                            borderStyle="solid" bg="gray.100"
                                            flex={1} display="flex"
                                            justifyContent="space-between" alignItems="center"
                                            gap="20px"
                                            p="16px"
                                            borderRadius="8px">
                                            <Heading
                                                as="h3" size="headingxs">Classroom ID: {id}</Heading>
                                            <Image src="images/img_arrow_down.svg" alt="Arrowdown" h="20px" w="20px"/>
                                        </AccordionButton>
                                        <AccordionPanel>
                                            <br/>
                                            <SimpleGrid ml={{md: "62px", base: "Opx"}} gap="24px" columns={{
                                                md: 3, base: 1,
                                                sm: 2
                                            }}>
                                                <Suspense fallback={<div>Loading feed...</div>}>
                                                    {classFiles && classFiles.find(f => f.classid === id)?.files?.map((d, index) => (
                                                        <Link
                                                            href={`/piece?username=${encodeURIComponent("@user"+d.user_id)}&categoryTitle=${encodeURIComponent(d.title)}&fileType=${encodeURIComponent(d.type)}&downloadCount=${encodeURIComponent(d.download_count)}&description=${encodeURIComponent(d.description)}&filename=${encodeURIComponent(d.filename)}`}
                                                            key={"cardgrid" + index} _hover={{color:"white"}}>
                                                        <UserProfile1 {...d} key={"cardgrid" + index}/>
                                                        </Link>
                                                    ))}
                                                </Suspense>
                                                <Button rightIcon={<Image
                                                    src="images/printer.png" alt="Plus" boxSize="16px"/>} gap="2px"
                                                        minW="156px" color="gray.100" maxW="1600px">
                                                    Print QR Codes
                                                </Button>

                                            </ SimpleGrid>

                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>
                        ))}
                    </Accordion>
                    <Link href="/newclassroom">
                        <Button gap="7px" rightIcon={<Image src="images/white_plus.png" w="16px"/>} width="100%"
                                color="gray.100_01" mt="16px" position={"relative"} px={{base: "40px", sm: "40px"}}
                                p={{md: "20px", base: "20px"}}>
                            Add New Classroom
                        </Button>
                    </Link>
                </Container>
            </Flex>
        </Box>
    );
}