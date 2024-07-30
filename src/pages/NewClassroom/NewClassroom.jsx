import { Helmet } from "react-helmet";
import Header from "components/Header";
import NewClassroom from "./NewClassroom";
import { Flex } from "@chakra-ui/react";
import React from "react";

export default function AddNewPiece(){
    return (
        <>
            <Helmet>
                <title>datAR - Submit your Custom Piece</title>
            </Helmet>
            <Flex gap="14px" bg="white.a700" w="100%" flexDirection={"column"}>
                <Header page={1}/>
                <NewClassroom/>
            </Flex>
        </>
    )
}