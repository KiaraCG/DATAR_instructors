import {Helmet} from "react-helmet";
import {ChipView} from "../../components/ChipView";
import Header from "../../components/Header";
import UserProfile2 from "../../components/UserProfile2";
import {CloseIcon} from "@chakra-ui/icons";
import {
    Box,
    SimpleGrid, Image, InputRightElement, InputGroup,
    Input, Flex,
    Text, Container, Link, Select,
} from "@chakra-ui/react";
import React, {Suspense, useEffect, useState} from "react";
import axios from "axios";

// const data = [
//     {userImage: null, username: "@user4", categoryTitle: "Supermarkets", fileType: "CSV", downloadCount: "162",},
//     {userImage: null, username: "@user3", categoryTitle: "Soccer players", fileType: "CSV", downloadCount: "161"},
//     {userImage: null, username: "@user6", categoryTitle: "Building measurements", fileType: "CSV", downloadCount: "50"},
//     {userImage: null, username: "@user4", categoryTitle: "3D Barchart", fileType: "Visualization", downloadCount: "38"},
//     {userImage: null, username: "@user5", categoryTitle: "kNN Algorithm", fileType: "Data manipulation", downloadCount: "12"},
//     {userImage: null, username: "@user4", categoryTitle: "K Means Algorithm", fileType: "Data manipulation", downloadCount: "7",}
// ];

export default function BrowseCustomPiecesPage() {
    const [sortOption, setSortOption] = useState("");

    const [searchBarValue2, setSearchBarValue2] = React.useState("");

    const [chipOptions, setChipOptions] = React.useState(() => [
        {value: 1, type: `data`, label: 'CSV'}, {value: 2, type: `manipulation`, label: 'Data Manipulation'}, {value: 3, type: `visualization`, label: 'Visualization'},

    ]);
    const [selectedChipOptions, setSelectedChipOptions] = React.useState([]);

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        // Fetch the data from the API
        axios.get('http://129.132.15.76:8008/files')  // Using relative path assuming proxy is set up correctly in package.json
            .then(response => {

                setData(response.data.filter(d => d.ispublic === 1));
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        let filtered = data;
        if (selectedChipOptions.length > 0) {
            const selectedFileTypes= chipOptions.filter(option => selectedChipOptions.includes(option.value)).map((option) => option.type);
            filtered = data.filter(d => selectedFileTypes.includes(d.type));
        }

        // Apply sorting to the filtered data
        if (sortOption) {
            filtered = [...filtered].sort((a, b) => {
                console.log(a.downloadCount);
                if (sortOption === "user_id") {
                    return a.user_id - b.user_id;
                } else if (sortOption === "title") {
                    return a.title.localeCompare(b.title);
                } else if (sortOption === "downloadCount") {
                    return b.download_count - a.download_count;
                }
                return 0;
            });
        }

        setFilteredData(filtered);

    }, [selectedChipOptions, data, chipOptions, sortOption]);



    return (
        <>
            <Helmet>
                <title>datAR - Browse Pieces</title>
            </Helmet>
            <Box bg="white.a700" w="100%">
                <Header page={2}/>
                <Flex bg="white-a700" py={{base: "20px", sm: "32px"}}>
                    <Container
                        display="flex" alignItems="start" px="8px"
                        flexDirection={{
                            md: "row"
                            , base:
                                "column"
                        }}
                        p={{md: 0, base: "20px"}}
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
                                <Text>Category Filter</Text>
                                <ChipView
                                    options={chipOptions} setOptions={setChipOptions} values={selectedChipOptions}
                                    setValues={setSelectedChipOptions}
                                    alignSelf="stretch"
                                    display="flex" flexWrap="wrap"
                                    gap="8px"
                                >
                                    {/* filtering */}
                                    {(option) => (
                                        <React.Fragment key={option.index}>
                                            {option.isSelected ? (
                                                <Box
                                                    onClick={option.toggle}
                                                    color="gray.900" fontSize="16px"
                                                    gap="8px"
                                                    display="flex" bg="gray.300"
                                                    flexDirection="row" justifyContent="flex-start" alignItems="center"
                                                    textAlign="center" cursor="pointer"
                                                    h="32px"
                                                    minW="20px"
                                                    px="6px"
                                                    borderRadius="8px"
                                                >
                                                    <span> {option.label}</ span>

                                                </Box>
                                            ) : (
                                                <Box
                                                    onClick={option.toggle} color="gray.900" fontSize="16px"
                                                    gap="8px"
                                                    display="flex" bg="gray. 100"
                                                    flexDirection="row" justifyContent="flex-start" alignItems="center"
                                                    textAlign="center" cursor="pointer"
                                                    h="32px"
                                                    minW="20px"
                                                    px="6px"
                                                    borderRadius="8px">
                                                    <span>{option.label}</span>
                                                </Box>
                                            )}
                                        </React.Fragment>
                                    )}
                                </ChipView></Flex>
                        </Flex>

                        <Flex gap="48px" alignSelf={{md: "center", base: "stretch"}} flex={1} flexDirection="column">
                            <Flex justifyContent="space-between" alignItems="stretch" flexDirection={{
                                md: "row"
                                , base:
                                    "column"
                            }}
                            gap="8px"
                            m="20px">
                                <InputGroup w={{md: "36%", base: "100%"}}>
                                    <Input
                                        placeholder={'Search'} value={searchBarValue2}
                                        onChange={(e) => setSearchBarValue2(e.target.value)}
                                        gap="16px"
                                        borderRadius="20px"
                                    />
                                    <InputRightElement>
                                        {searchBarValue2?.length > 0 ? (
                                            <CloseIcon onClick={() => setSearchBarValue2("")}/>
                                        ) : (
                                            <Image src="images/search.svg" alt="Search" w="16px" h="16px"/>
                                        )}
                                    </InputRightElement>
                                </InputGroup>
                                <Flex justifyContent="center" alignItems="center" flexDirection={{ md: "row", base: "column" }}>
                                    <Select
                                        placeholder="Sort by"
                                        w={{ md: "200px", base: "100%" }}
                                        value={sortOption}
                                        onChange={(e) => setSortOption(e.target.value)}
                                    >
                                        <option value="user_id">Username</option>
                                        <option value="title">Title</option>
                                        <option value="downloadCount">Download Count</option>
                                    </Select>
                                </Flex>

                            </Flex>
                            <SimpleGrid m1={{
                                md:
                                    "62px", base: "Opx"
                            }} gap="24px" columns={{md: 3, base: 1, sm: 2}}
                                        ml="20px" mr="20px">
                                <Suspense fallback={<div>Loading feed...</div>}>
                                    {filteredData.map((d, index) => (

                                        <Link
                                            href={`/piece?username=${encodeURIComponent("@user"+d.user_id)}&categoryTitle=${encodeURIComponent(d.title)}&fileType=${encodeURIComponent(d.type)}&downloadCount=${encodeURIComponent(d.download_count)}&description=${encodeURIComponent(d.description)}&filename=${encodeURIComponent(d.filename)}&fileId=${encodeURIComponent(d.id)}`}
                                              key={"cardgrid" + index} >
                                            <UserProfile2 {...d} key={"griduserfour" + index}/>
                                        </Link>
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
