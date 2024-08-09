import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import {Flex} from "@chakra-ui/react";
import React from "react";
import PiecePage from "./PiecePage";

export default function Piece() {
    return (
        <>
            <Helmet>
                <title>datAR - View Piece</title>
            </Helmet>
            <Flex gap = {{md: "86px", base:"43px", sm: "64px"}} bg="white.a700" w="100%" flexDirection="column">
                <Header page={5}/>
            <PiecePage/>
            </Flex>
        </>
    );
}