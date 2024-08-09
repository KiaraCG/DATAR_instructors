import React, {useRef, useState} from 'react';
import {Button, Text, Image, Switch, Box, Flex} from '@chakra-ui/react';
import Editor from '@monaco-editor/react';

const ToggleComponent = () => {
    const [isLeftSelected, setIsLeftSelected] = useState(true);

    const fileInputRef = useRef(null);

    const handleToggle = () => {
        setIsLeftSelected(!isLeftSelected);
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Handle the uploaded file
            console.log("File uploaded:", file);
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    return (
        <Box p={4}>
            <Text>
                This toggle allows you to upload a file (off) or create a new file via an editor (on).
            </Text>
            <Switch
                isChecked={!isLeftSelected}
                onChange={handleToggle}
                size="lg"
                colorScheme="teal"
                mb={4}
            />
            {isLeftSelected ? (
                <Flex flexDirection="row" justifyContent="flex-end" alignItems="flex-start">

                    <Button
                        ml={{md: "12px", base: "0px"}}
                        color={"gray.100"}
                        leftIcon={<Image src="images/upload.png" alt="Upload" boxSize={"20px"}/>}
                        gap="2px"
                        mt={2}
                        mr={5}
                        onClick={triggerFileInput}
                    >
                        Browse Files
                    </Button>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{display: 'none'}}
                        onChange={handleFileUpload}
                    />

                    <Text mt="15px" ml={{md: "12px", base: "0px"}} color={"gray.400"}>
                        Please upload the corresponding Python script or CSV file.
                    </Text>
                </Flex>
            ) : (
                <Editor
                    height="180px"
                    width="100%"
                    defaultLanguage="python"
                    defaultValue={"# start writing your code here \n \n \n \n \n \n \n \n \n"}
                />
            )}
        </Box>
    );
};

export default ToggleComponent;
