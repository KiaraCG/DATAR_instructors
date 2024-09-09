import { Helmet } from "react-helmet";
import Header from "components/Header";
import MyclassroomsRowtitleFour from "./MyClassroomsRowtitleFour";
import { Box } from "@chakra-ui/react";
import React from "react";

export default function MyClassroomsPage() {

    return (
        <>
        <Helmet>
            <title> datAR - My Classrooms </title>
        </Helmet>
        <Box bg="white.a700" w="100">
            <Header page={0} />
            <MyclassroomsRowtitleFour/>
        </Box>
        </>
    )
}