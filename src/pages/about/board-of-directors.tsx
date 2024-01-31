import SEO from "@/components/seo";
import { Flex, Text, } from "@chakra-ui/react";
import Navbar from "@/components/navbar";

const AboutBoardOfDirectors = () => {
    return (
        <>
            <SEO title={"Board of Directors"}/>

            <Navbar>
                <Flex minH={"40vh"} align={"center"} justify={"center"}>
                    <Text fontSize={{ md: "xl" }}>Board of Directors</Text>
                </Flex>
            </Navbar>
        </>
    );
};

export default AboutBoardOfDirectors;
