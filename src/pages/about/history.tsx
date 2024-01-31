import SEO from "@/components/seo";
import { Flex, Text, } from "@chakra-ui/react";
import Navbar from "@/components/navbar";

const AboutHistory = () => {
    return (
        <>
            <SEO title={"History"}/>

            <Navbar>
                <Flex minH={"40vh"} align={"center"} justify={"center"}>
                    <Text fontSize={{ md: "xl" }}>History</Text>
                </Flex>
            </Navbar>
        </>
    );
};

export default AboutHistory;
