import { Helmet } from "react-helmet";
import { ChipView } from "../../components/ChipView"; 
import Header from "../../components/Header"; 
import UserProfile1 from "../../components/UserProfile1";
import { CloseIcon } from "@chakra-ui/icons";
import {
    Box, SimpleGrid,
    Text,
    Button,
    Image, Flex, InputRightElement, InputGroup,
    Input, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Container,
} from "@chakra-ui/react";
import React, { Suspense } from "react";
const data = [
    {
        userImage: "images/piece_placeholder.png",
        duplicateColumnsText: "Duplicate columns", dataManipulationText: "Data manipulation",
    },
    { userImage: "images/piece_placeholder.png", duplicateColumnsText: "Plants collection", dataManipulationText: "CSV" },
    {
        userImage: "images/piece_placeholder.png", duplicateColumnsText: "Heart rate measurements", dataManipulationText: "CSV",
    },
    { userImage: "images/piece_placeholder.png", duplicateColumnsText: "Boxplot", dataManipulationText: "Visualization" },
    {
        userImage: "images/piece_placeholder.png", duplicateColumnsText: "Colored Scatterplot", dataManipulationText: "Visualization",
    },
    { userImage: "images/piece_placeholder.png", duplicateColumnsText: "Water intake", dataManipulationText: "CSV" },
];

export default function MyCustomPiecesPage() {
    const [searchBarValue1, setSearchBarValue1] = React.useState("");
    const [chipOptions, setChipOptions] = React.useState(() => [
        { value: 1, label: `CSV` },
        { value: 2, label: `Data manipulation` },
        { value: 3, label: `Visualization` },
    ]);
    const [selectedChipOptions, setSelectedChipOptions]
        = React.useState([]);
    return (
        <>
            <Helmet>
                <title>Kiara&#39;s Application2</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <Box bg="white.a700"
                w="100%">
                <Header />
                <Flex bg="white.a700"
                    py={{
                        base: "20px", sm:
                            "32px"
                    }}>
                    <Container
                        display="flex" alignItems="start"
                        px="8px"
                        flexDirection={{ md: "row", base: "column" }} p={{
                            md: 0, base:
                                "20px"
                        }}
                    >
                        <Flex
                            gap="24px"
                            borderColor="blue_gray.100" borderWidth="1px"
                            borderStyle="solid" bg="white.a700"
                            w={{
                                md:
                                    "20%", base:
                                    "100%"
                            }}
                            flexDirection="column"
                            p="16px"
                            borderRadius="8px"
                        >
                            <Flex gap="12px" flexDirection="column"
                                alignItems="start">
                                <Text>Categories</Text>
                                <ChipView
                                    options={chipOptions} setOptions={setChipOptions} values={selectedChipOptions} setValues={setSelectedChipOptions}
                                    alignSelf="stretch" display="flex" flexWrap="wrap"
                                    gap="8px">
                                    {(option) => (
                                        <React.Fragment key={option.index}>
                                            {option.isSelected ? (
                                                <Box
                                                    onClick={option.toggle}
                                                    color="gray, 900" fontSize="16px"
                                                    gap="8px"
                                                    display="flex" bg="gray.100"
                                                    flexDirection="row" justifyContent="center" alignItems="center" textAlign="center" cursor="pointer"
                                                    h="32px"
                                                    minW="72px"
                                                    px="6px"
                                                    borderRadius="8px"
                                                >
                                                    <span>{option.label}</span>
                                                    < Image
                                                        src="images/img_arrowright.svg" alt="Arrow Right" w="16px" h="16px" />
                                                </ Box>
                                            ) : (
                                                <Box
                                                    onClick={option.toggle} color="gray.900" fontSize="16px"
                                                    gap="8px"
                                                    display="flex" bg="gray. 100"
                                                    flexDirection="row" justifyContent="center" alignItems="center" textAlign="center" cursor="pointer"
                                                    h="32px"
                                                    minW="72px"
                                                    px="6px"
                                                    borderRadius="8px">
                                                    <span>{option.label}</span>
                                                    <Image src="images/img_arrowright.svg" alt="Arrow Right"
                                                        w="16px" h="16px" />
                                                </Box>
                                            )}
                                        </React.Fragment>
                                    )}
                                </ChipView>
                            </Flex>
                            <Flex gap="12px" flexDirection="column">
                                <Flex justifyContent="space-between" alignItems="center" gap="20px">
                                    <Text>Date created</Text>
                                    <Flex>
                                         <Text
                                            size="textxs">2024-2025</Text>
                                    </Flex>
                                </Flex>
                                <RangeSlider defaultValue={[0, 20]} h="8px" display="flex">
                                    <RangeSliderTrack>
                                        <RangeSliderFilledTrack />
                                    </RangeSliderTrack>
                                    <RangeSliderThumb index={1} />
                                </RangeSlider>
                            </Flex>
                        </ Flex>
                        <Flex gap="48px" alignSelf={{ md: "center", base: "stretch" }} flex={1} flexDirection="column">
                            <Flex justifyContent="center" alignItems="center" flexDirection={{
                                md:
                                    "row", base: "column"
                            }}>
                                <InputGroup w={{ md: "36%", base: "100%" }}>
                                    <Input
                                        placeholder={`Search`} value={searchBarValue1}
                                        onChange={(e) => setSearchBarValue1(e.target.value)}
                                        gap="16px"
                                        borderRadius="20px"
                                    />
                                    <InputRightElement>
                                        {searchBarValue1?.length > 0 ? (
                                            <CloseIcon onClick={() => setSearchBarValue1("")} />
                                        ) : (
                                            <Image src="images/img_search.svg" alt="Search" w="16px" h="16px" />
                                        )}
                                    </InputRightElement>
                                </ InputGroup>
                                <Flex gap="8px" flexDirection={{ base: "column", sm: "row" }}>
                                    <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                        <Button leftIcon={<Image
                                            src="images/img_plus_gray_100.svg" alt="Plus" />} gap="8px"
                                            minW="156px">
                                            Add New Piece
                                        </Button>
                                    </a>
                                    <Text
                                        color="gray.600" bg="gray.100"
                                        justifyContent="center"
                                        display="flex" alignItems="center" px="8px"
                                        py="4px"
                                        borderRadius="8px">
                                        Date ascending
                                    </Text>
                                    <Text
                                        color="gray.600"
                                        bg="gray.100"
                                        justifyContent="center"
                                        display="flex" alignItems="center" px="8px"
                                        py="4px"
                                        borderRadius="8px"
                                    > Date descending

                                    </Text>
                                </Flex>
                            </Flex>
                            <SimpleGrid ml={{ md: "62px", base: "Opx" }} gap="24px" columns={{
                                md: 3, base: 1,
                                sm: 2
                            }}>
                                <Suspense fallback={<div>Loading feed...</div>}>
                                    {data.map((d, index) => (
                                        <UserProfile1 {...d} key={"cardgrid" + index} />
                                    ))}
                                </Suspense>
                            </ SimpleGrid>
                        </Flex>
                    </Container>
                </Flex>
            </Box>
        </>
    );
}