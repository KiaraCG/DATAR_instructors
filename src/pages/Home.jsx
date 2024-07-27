import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import AboutSection from "./AboutSection";
import HomeSection from "./HomeSection";
import { Box, Image, Flex } from "@chakra-ui/react";

import HomeButton from "components/HomeButton";

// todo: create referenced (linked) pages

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home - Explore the datAR Project and Custom Pieces</title>
            </Helmet>
            <Flex gap={{ md: "92px", base: "46px", sm: "69px" }} bg="white.a700" w="100%" flexDirection="column">
                <Flex flexDirection="column" alignItems="center">
                    {/* home section */}
                    <HomeSection />

                    {/* about section */}
                    <AboutSection />
                    <Image
                        src="images/img_ideation_update.png"
                        alt="Ideation Image" h={{
                            md: "50x", base:
                                "auto"
                        }}
                        mt="0px"
                        fit="cover"
                        w="100%"
                        maxw="798px"
                        mx="auto"
                        p={{
                            md: "12%", base: "20px"
                        }}
                    />
                    <>
                        <Flex mt="20px" alignSelf={{ md: "auto", base: "stretch" }} justifyContent="center" px={{ md: "5%", base: "20px" }}>
                            <Flex gap="40px" w="100%" maxW="820px" mx="auto" flexDirection={{ md: "row", base: "column" }}>
                                <Suspense fallback={<div>Loading feed...</div>}>
                                    <Link to="/mycustompieces" style={{ textDecoration: "none" }}>
                                        <HomeButton text="My Custom Pieces" imgsrc="images/bookicon.png" key={"homeList" + 0} />
                                    </Link>
                                    <Link to="/browsecustompieces" style={{ textDecoration: "none" }}>
                                        <HomeButton text="Browse Pieces" imgsrc="images/search.svg" key={"homeList" + 1} />
                                    </Link>
                                    <Link to="/myclassrooms" style={{ textDecoration: "none" }}>
                                        <HomeButton text="My Classrooms" imgsrc="images/sandbox.svg" key={"homeList" + 2} />
                                    </Link>
                                </Suspense>
                            </Flex>
                        </Flex>
                    </>
                </Flex>
                <br />
                <br />
                <Footer />
            </Flex>
        </>
    );
}
export default Home;