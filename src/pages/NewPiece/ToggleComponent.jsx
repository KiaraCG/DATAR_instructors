import React, {useRef, useState} from 'react';
import {Button, Text, Image, Switch, Box, Flex} from '@chakra-ui/react';
import Editor from '@monaco-editor/react';

const ToggleComponent = ({onFileChange, title, id}) => {
    const [isLeftSelected, setIsLeftSelected] = useState(true);

    const fileInputRef = useRef(null);

    const [code, setCode] = useState('# start writing your code here \n \n \n \n \n \n \n \n \n');


    const handleToggle = () => {
        setIsLeftSelected(!isLeftSelected);
    };

    const handleFileUpload = (event) => {

        if (isLeftSelected) {
            const file = event.target.files[0];
            if (file) {
                console.log("File uploaded:", file);
                onFileChange(file); // Pass the file to the parent component
            }
        } else {
            const blob = new Blob([code], { type: 'text/python' });
            const file = new File([blob], title+'_'+id+'.py', { type: 'text/python' });
            onFileChange(file);
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
                <Flex flexDirection="column" justifyContent="flex-end" alignItems="flex-start">
                    <Editor
                        height="180px"
                        width="100%"
                        defaultLanguage="python"
                        value={code}
                    />
                    <Button
                    variant="fill"
                    mt={"10px"}
                    ml={{md: "10px", base: "20px"}}
                    alignSelf="flex-end"
                    w="140px"
                    color="gray.100"
                    onClick={handleFileUpload}
                >
                    Submit Code
                </Button>
                </Flex>
            )}
        </Box>
    );
};

export default ToggleComponent;
