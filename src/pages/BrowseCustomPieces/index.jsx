import { Helmet } from "react-helmet";
import { ChipView } from "../../components/ChipView";
import Header from "../../components/Header";
import UserProfile2 from "../../components/UserProfile2";
import { CloseIcon } from "@chakra-ui/icons";
import {
    Box,
    SimpleGrid, Image, InputRightElement, InputGroup,
    Input, Flex, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack,
    RangeSliderThumb,
    Text, Container,
} from "@chakra-ui/react";
import React, { Suspense } from "react";

const data = [
    { username: "@user4", categoryTitle: "Supermarkets", fileType: "CSV", downloadCount: "162", },
    { username: "@user3", categoryTitle: "Soccer players", fileType: "CSV", downloadCount: "161" },
    { username: "@user6", categoryTitle: "Building measurements", fileType: "CSV", downloadCount: "50" },
    { username: "@user4", categoryTitle: "3D Barchart", fileType: "Visualization", downloadCount: "38" },
    { username: "@user5", categoryTitle: "kNN Algorithm", fileType: "Data manipulation", downloadCount: "12" },
    { username: "@user4", categoryTitle: "K Means Algorithm", fileType: "Data manipulation", downloadCount: "7", }
];



export default function BrowseCustomPiecesPage() {
    const [chipOptions1, setChipOptions1] = React.useState(() => [
        { value: 1, label: 'User ascending' }, { value: 2, label: 'Date descending' },
        { value: 3, label: 'Popularity Descending', }
    ]);
    const [selectedChipOptions1, setSelectedChipOptions1] = React.useState([]);
    const [searchBarValue2, setSearchBarValue2] = React.useState("");
    const [chipOptions, setChipOptions] = React.useState(() => [
        { value: 1, label: `CSV` }, { value: 2, label: `Data manipulation` }, { value: 3, label: 'Visualization' },

    ]);
    const [selectedChipOptions, setSelectedChipOptions] = React.useState([]);
    return (
        <>
            <Helmet>
                <title>datAR - Browse Pieces</title>
            </Helmet>
            <Box bg="white.a700" w="100%">
                <Header page={2}/>
                <Flex bg="white-a700" py={{ base: "20px", sm: "32px" }}>
                    <Container
                        display="flex" alignItems="start" px="8px"
                        flexDirection={{
                            md: "row"
                            , base:
                                "column"
                        }}
                        p={{ md: 0, base: "20px" }}
                    >
                        <Flex
                            gap="24px"
                            borderColor="blue_gray.100" borderWidth="1px"
                            borderStyle="solid" bg="white.a700"
                            w={{
                                md: "20%", base:
                                    "100%"
                            }}
                            flexDirection="column"
                            p="16px"
                            borderRadius="8px"
                        >
                            <Flex gap="12px" flexDirection="column" alignItems="start">
                                <Text>Categories</Text>
                                <ChipView
                                    options={chipOptions} setOptions={setChipOptions} values={selectedChipOptions} setValues={setSelectedChipOptions}
                                    alignSelf="stretch"
                                    display="flex" flexWrap="wrap"
                                    gap="8px"
                                >

                                    {(option) => (
                                        <React.Fragment key={option.index}>
                                            {option.isSelected ? (
                                                <Box
                                                    onClick={option.toggle}
                                                    color="gray.900" fontSize="16px"
                                                    gap="8px"
                                                    display="flex" bg="gray.100"
                                                    flexDirection="row" justifyContent="center" alignItems="center" textAlign="center" cursor="pointer"
                                                    h="32px"
                                                    minW="72px"
                                                    px="6px"
                                                    borderRadius="8px"
                                                >
                                                    <span> {option.label}</ span>
                                                    <Image src="images/img_arrowright.svg" alt="Arrow Right" w="16px" h="16px" />
                                                </Box>
                                            ) : (
                                                <Box
                                                    onClick={option.toggle} color="gray,900" fontSize="16px"
                                                    gap="8px"
                                                    display="flex" bg="gray. 100"
                                                    flexDirection="row" justifyContent="center" alignItems="center" textAlign="center"
                                                    cursor="pointer"
                                                    h="32px"
                                                    minW="72px"
                                                    px="6px"
                                                    borderRadius="8px" >
                                                    <span>{option.label}</span>
                                                    <Image src="images/img_arrowright.svg" alt="Arrow Right" w="16px" h="16px" />
                                                </Box>
                                            )}
                                        </React.Fragment>
                                    )}
                                </ChipView></Flex>
                            <Flex gap="12px" flexDirection="column">
                                <Flex justifyContent="space-between" alignItems="center" gap="20рх">
                                    <Text>Date created</Text>
                                    < Flex>
                                        <Text
                                            size="textxs">2024-2025</Text>
                                    </Flex>

                                </Flex>
                                <RangeSlider defaultValue={[0, 20]} h="8px" display="flex">
                                    < RangeSliderTrack>
                                        <RangeSliderFilledTrack />
                                    </RangeSliderTrack>
                                    < RangeSliderThumb index={1} />
                                </RangeSlider>
                            </Flex>
                        </Flex>

                        <Flex gap="48px" alignSelf={{ md: "center", base: "stretch" }} flex={1} flexDirection="column">
                            <Flex justifyContent="center" alignItems="center" flexDirection={{
                                md: "row"
                                , base:
                                    "column"
                            }}>
                                <InputGroup w={{ md: "36%", base: "100%" }}>
                                    <Input
                                        placeholder={'Search'} value={searchBarValue2}
                                        onChange={(e) => setSearchBarValue2(e.target.value)}
                                        gap="16px"
                                        borderRadius="20px"
                                    />
                                    <InputRightElement>
                                        {searchBarValue2?.length > 0 ? (
                                            <CloseIcon onClick={() => setSearchBarValue2("")} />
                                        ) : (
                                            <Image src="images/search.svg" alt="Search" w="16px" h="16px" />
                                        )}
                                    </InputRightElement>
                                </InputGroup>
                                <ChipView
                                    options={chipOptions1} setOptions={setChipOptions1}
                                    values={selectedChipOptions1}
                                    setValues={setSelectedChipOptions1}
                                    w="56%"
                                    display="flex" flexWrap="wrap"
                                    gap="8px"
                                >
                                    {(option) => (
                                        <React.Fragment key={option.index}>
                                            {option.isSelected ? (
                                                <Box
                                                    onClick={option.toggle} color="gray, 600" fontSize="16px"
                                                    bg="gray.100"
                                                    display="flex" flexDirection="row" justifyContent="center" alignItems="center" textAlign="center" cursor="pointer"
                                                    h="32px"
                                                    minW="134px"
                                                    px="8px"
                                                    borderRadius="8px"
                                                >
                                                    < span>{option.label}</span>
                                                </Box>
                                            ) : (
                                                <Box
                                                    onClick={option.toggle}
                                                    color="gray.600"
                                                    fontSize="16px"
                                                    bg="gray. 100" display="flex" flexDirection="row" justifyContent="center" alignItems="center" textAlign="center" cursor="pointer"
                                                    h="32px"
                                                    minW="134px"
                                                    px="8px"
                                                    borderRadius="8px"
                                                > <span>{option.label}</span>

                                                </Box>

                                            )}
                                        </React.Fragment>
                                    )}
                                </ChipView>
                            </Flex>
                            <SimpleGrid m1={{
                                md:
                                    "62px", base: "Opx"
                            }} gap="24px" columns={{ md: 3, base: 1, sm: 2 }}>
                                <Suspense fallback={<div>Loading feed...</div>}>
                                    {data.map((d, index) => (
                                        <UserProfile2 {...d} key={"griduserfour" + index} />
                                    ))}
                                </Suspense>
                            </SimpleGrid>
                        </Flex>
                    </Container>
                </Flex>
            </Box>
        </>
    );
}