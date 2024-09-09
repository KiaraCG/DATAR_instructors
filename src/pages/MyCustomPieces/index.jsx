import {Helmet} from "react-helmet";
import {ChipView} from "../../components/ChipView";
import Header from "../../components/Header";
import UserProfile1 from "../../components/UserProfile1";
import {CloseIcon} from "@chakra-ui/icons";
import {
    Box, SimpleGrid,
    Text,
    Button, Link,
    Image, Flex, InputRightElement, InputGroup,
    Input, Container,
} from "@chakra-ui/react";
import React, {Suspense, useContext, useEffect, useState} from "react";
import axios from "axios";
import { AuthContext } from '../../AuthContext';
import { useNavigate } from 'react-router-dom'

// TODO: get id from LOGIN
const id = 2;
// const data = [
//     {userImage: null, username: "@user"+{id}, categoryTitle: "Supermarkets", fileType: "CSV", downloadCount: "162",},
//     {userImage: null, username: "@user3", categoryTitle: "Soccer players", fileType: "CSV", downloadCount: "161"},
//     {userImage: null, username: "@user6", categoryTitle: "Building measurements", fileType: "CSV", downloadCount: "50"},
//     {userImage: null, username: "@user4", categoryTitle: "3D Barchart", fileType: "Visualization", downloadCount: "38"},
//     {userImage: null, username: "@user5", categoryTitle: "kNN Algorithm", fileType: "Data manipulation", downloadCount: "12"},
//     {userImage: null, username: "@user4", categoryTitle: "K Means Algorithm", fileType: "Data manipulation", downloadCount: "7",}
// ];

export default function MyCustomPiecesPage(props) {
    const { user } = props;
    const navigate = useNavigate();

    
    useEffect(() => {
        console.log('User:', user); // Check user state in PrivateRoute
        if (!user) {
            // navigate('/login');
        }
    }, [user]);

    const [searchBarValue1, setSearchBarValue1] = React.useState("");
    const [chipOptions, setChipOptions] = React.useState(() => [
        {value: 1, type: `data`, label: 'CSV'},
        {value: 2, type: `manipulation`, label: 'Data Manipulation'},
        {value: 3, type: `visualization`, label: 'Visualization'},
    ]);
    const [selectedChipOptions, setSelectedChipOptions]
        = React.useState([]);

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);


    useEffect(() => {
        // Fetch the data from the API
        axios.get('http://129.132.15.76:8008/files/?user_id=' + id)  // Using relative path assuming proxy is set up correctly in package.json
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        // Filter the data based on the selected chip option
        if (selectedChipOptions.length > 0) {
            const selectedFileTypes = chipOptions.filter(option => selectedChipOptions.includes(option.value)).map((option) => option.type);
            setFilteredData(data.filter(d => selectedFileTypes.includes(d.type)));
        } else {
            setFilteredData(data); // Show all data if no chip is selected
        }
    }, [selectedChipOptions, data, chipOptions]);

    return (
        <>
            <Helmet>
                <title>datAR - My Custom Pieces</title>
            </Helmet>
            <Box bg="white.a700"
                 w="100%">
                <Header page={1}/>
                <Flex bg="whitea700"
                      py={{
                          base: "20px", sm:
                              "32px"
                      }}>
                    <Container
                        display="flex" alignItems="start"
                        px="8px"
                        flexDirection={{md: "row", base: "column"}} p={{
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
                                <Text>Category Filter</Text>
                                <ChipView
                                    options={chipOptions} setOptions={setChipOptions} values={selectedChipOptions}
                                    setValues={setSelectedChipOptions}
                                    alignSelf="stretch" display="flex" flexWrap="wrap"
                                    gap="8px">
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
                                                    <span>{option.label}</span>

                                                </ Box>
                                            ) : (
                                                <Box
                                                    onClick={option.toggle} color="gray.900" fontSize="16px"
                                                    gap="8px"
                                                    display="flex"
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
                                </ChipView>
                            </Flex>

                        </ Flex>
                        <Flex gap="48px" alignSelf={{md: "center", base: "stretch"}} flex={1} flexDirection="column">
                            <Flex ml="55px" justifyContent="flex-start" alignItems="space-around" flexDirection={{
                                md:
                                    "row", base: "row"
                            }}>
                                <InputGroup w={{md: "20rem", base: "100%"}} mr="16px">
                                    <Input
                                        placeholder={`Search`} value={searchBarValue1}
                                        onChange={(e) => setSearchBarValue1(e.target.value)}
                                        gap="16px"
                                        borderRadius="20px"
                                    />
                                    <InputRightElement>
                                        {searchBarValue1?.length > 0 ? (
                                            <CloseIcon onClick={() => setSearchBarValue1("")}/>
                                        ) : (
                                            <Image src="images/search.svg" alt="Search" w="16px" h="16px"/>
                                        )}
                                    </InputRightElement>
                                </ InputGroup>
                                <Flex gap="8px" flexDirection={{base: "column", sm: "row"}}>
                                    <Link href="/newpiece">
                                        <Button leftIcon={<Image
                                            src="images/white_plus.png" alt="Plus" boxSize="16px"/>} gap="2px"
                                                minW="156px" color="gray.100" h="30px">
                                            Add New Piece
                                        </Button>
                                    </Link>
                                </Flex>
                            </Flex>
                            <SimpleGrid ml={{md: "62px", base: "Opx"}} gap="24px" columns={{
                                md: 3, base: 1,
                                sm: 2
                            }}>

                                <Suspense fallback={<div>Loading feed...</div>}>
                                    {filteredData.map((d, index) => (
                                        <Link
                                            href={`/piece?username=${encodeURIComponent("@user"+d.user_id)}&categoryTitle=${encodeURIComponent(d.title)}&fileType=${encodeURIComponent(d.type)}&downloadCount=${encodeURIComponent(d.download_count)}&description=${encodeURIComponent(d.description)}&filename=${encodeURIComponent(d.filename)}&fileId=${encodeURIComponent(d.id)}`}
                                            key={"cardgrid" + index} _hover={{}}>
                                            <UserProfile1 {...d} key={"cardgrid" + index}/>
                                        </Link>
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