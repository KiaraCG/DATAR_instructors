import {SelectBox} from "../../components/SelectBox";
import React, { useState} from 'react';
import axios from 'axios';
import { Flex, Container, Heading, Textarea, Text, Box, Button, Checkbox, Image } from '@chakra-ui/react';
import ToggleComponent from './ToggleComponent';
import { useNavigate } from 'react-router-dom';

const dropDownOptions = [
    { label: "CSV File", value: "data" },
    { label: "Python Visualization", value: "visualization" },
    { label: "Python Script for Data Manipulation", value: "manipulation" }
];

export default function NewPieceSection() {

    const id = localStorage.getItem('user');

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    const [category, setCategory] = useState('');
    const [isPublic, setIsPublic] = useState(true); // Assume there's a toggle component managing this

    const navigate = useNavigate();

    const handleFileUpload = (f) => {
        if (f) {
            setFile(f);
            console.log("File uploaded (Parent):", f);
        }
    };

    const handleSubmit = async () => {

        const formData = new FormData();
        if (!file) {
            alert("Please select a file first!");
            return;
        }

        formData.append('uploaded_file', file);
        formData.append('description', description);
        formData.append('user_id', id);
        formData.append('title', title);
        formData.append('ispublic', isPublic);

        if (category === 'visualization' || category === 'manipulation') {
            formData.append('type', category);
        }
        console.log('Submitting:');
        console.log(formData.get('title'));
        console.log(formData.get('uploaded_file'));

        try {
            const response = await axios.post('http://129.132.15.76:8008/files/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                transformRequest: formData => formData,
            });

            console.log('Response:', response.data);
            navigate('/mycustompieces');
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
    };

    return (
        <>
            <Flex mb="4px" flexDirection="column" alignItems="center">
                <Flex bg="white.a700" alignSelf="stretch" px={{ md: "0px", base: "20px" }}>
                    <Container mt="60px" w="100%" display="flex" maxW="1072px" px="0px" mx="auto">
                        <Heading as="h1" ml={{ md: "12px", base: "0px" }} letterSpacing="—0.48px">
                            New Piece
                        </Heading>
                    </Container>
                </Flex>

                <Container mt="40px" gap="8px" display="flex" alignSelf="stretch" flexDirection="column" alignItems="start" maxW="1082px" w="100%" px="0px" mx="auto" p={{ md: 0, base: "20px" }}>
                    <Text ml={{ md: "12px", base: "0px" }}>Title</Text>
                    <Textarea
                        ml={{ md: "12px", base: "0px" }}
                        placeholder={`Add your piece's title.`}
                        color="gray.600"
                        borderColor="blue_gray.100"
                        w="70%"
                        borderRadius="8px"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Container>

                <Container mt="40px" gap="8px" display="flex" alignSelf="stretch" flexDirection="column" alignItems="start" maxW="1078px" w="100%" px="0px" p={{ md: 0, base: "20px" }}>
                    <Text ml={{ md: "12px", base: "0px" }}>Please select a category for your custom piece</Text>
                    <SelectBox
                        ml={{ md: "12px", base: "0px" }}
                        shape="round"
                        indicator={<Image src="images/img_arrowdown.svg" alt="Arrow Down" w="16px" h="16px" />}
                        name="Category Dropdown"
                        placeholder={'Category'}
                        options={dropDownOptions}
                        style={{ gap: "16px", borderColor: "blue_gray.100", borderWidth: "0.5px", borderStyle: "solid" }}
                        w="70%"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </Container>

                <Container mt="48px" gap="4px" display="flex" alignSelf="stretch" flexDirection="column"
                           alignItems="start" maxW="1080px" w="100%" px="0px" mx="auto" p={{md: 0, base: "20px"}}>
                    <ToggleComponent onFileChange={handleFileUpload} title={title} id={id}/>
                </Container>

                <Container mt="40px" gap="8px" display="flex" alignSelf="stretch" flexDirection="column"
                           alignItems="start" maxW="1082px" w="100%" px="0px" mx="auto" p={{md: 0, base: "20px"}}>
                    <Text ml={{md: "12px", base: "0px" }}>Description</Text>
                    <Textarea
                        placeholder={`Add a brief description of your piece.`}
                        color="gray.600"
                        borderColor="blue_gray.100"
                        w="70%"
                        borderRadius="8px"
                        ml={{ md: "12px", base: "0px" }}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Container>

                <Container mt="48px" gap="4px" display="flex" alignSelf="stretch" flexDirection="column" alignItems="start" maxW="1080px" w="100%" px="0px" mx="auto" p={{ md: 0, base: "20px" }}>
                    <Box mt="26px" ml={{ md: "16px", base: "0px" }} alignSelf="stretch">
                        <Flex gap="12px" alignItems={"center"}>
                            <Checkbox defaultChecked isChecked={isPublic} onChange={(e) => setIsPublic(e.target.checked)}>
                                <Text>Make public</Text>
                            </Checkbox>
                        </Flex>
                        <Flex px={{ base: "20px", sm: "28px" }}>
                            <Text color="gray.600">
                                This allows other users to view and download your piece in the 'Browse Pieces' section.
                            </Text>
                        </Flex>
                    </Box>
                    <Button
                        variant="fill"
                        mt="70px"
                        ml={{ md: "10px", base: "20px" }}
                        alignSelf="start"
                        minW="394px"
                        color="gray.100"
                        onClick={handleSubmit}
                    >
                        Submit Custom Piece
                    </Button>
                </Container>
            </Flex>
        </>
    );
}