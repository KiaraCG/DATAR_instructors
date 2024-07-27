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
    Button,
} from "@chakra-ui/react";
import UserProfile1 from "../../components/UserProfile1";
import React, { Suspense } from "react";

const data = [
    { duplicateColumnsText: "Duplicate columns", dataManipulationText: "Data manipulation", },
    { duplicateColumnsText: "Plants collection", dataManipulationText: "CSV" },
    { duplicateColumnsText: "Colored Scatterplot", dataManipulationText: "Visualization", },
];

let classIDs = [123456, 987654, 673786, 382764];

export default function MyclassroomsRowtitleFour() {
    return (
        <Box mb="4px">
            <Flex flexDirection="column" alignItems="center">
                <Flex bg="white-a700" alignSelf="stretch" py={{
                    md: "62px"
                    , base: "20px"
                }}>
                    <Container display="flex" px={{ base: "20px", sm: "40px" }} p={{
                        md:
                            0, base: "20px"
                    }}>
                        <Flex gap="10px" w="100%" flexDirection="column" alignItems="start">
                            <Heading size="headingmd" as="h1" letterSpacing="-0.48px">
                                @user678
                            </Heading>
                            <Flex mb="84px" alignSelf="stretch">
                                <Heading
                                    size="headings" letterSpacing="-0.96px">
                                    My Classrooms
                                </Heading>
                            </Flex>
                        </ Flex>
                    </Container >
                </Flex >
                <Container mt="-86px" position="relative" px={{ base: "20px", sm: "40px" }} p={{ md: 0, base: "20px" }} >
                    <Accordion gap="16px" display="flex" flexDirection="column" allowToggle>
                        {classIDs.map((id) => (
                            <AccordionItem>
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
                                            <Image src="images/img_arrow_down.svg" alt="Arrowdown" h="20px" w="20px" />
                                        </AccordionButton>
                                        <AccordionPanel>
                                            <br />
                                            <SimpleGrid ml={{ md: "62px", base: "Opx" }} gap="24px" columns={{
                                                md: 3, base: 1,
                                                sm: 2
                                            }}>
                                                <Suspense fallback={<div>Loading feed...</div>}>
                                                    {data.map((d, index) => (
                                                        <UserProfile1 {...d} key={"cardgrid" + index} />
                                                    ))}
                                                </Suspense>
                                                <Button rightIcon={<Image
                                                    src="images/printer.png" alt="Plus" boxSize="16px" />} gap="2px"
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
                </Container>
            </Flex>
        </Box>
    );
}