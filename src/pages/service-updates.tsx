import SEO from "@/components/seo";
import { Flex, Text } from "@chakra-ui/react";
import Navbar from "@/components/navbar";

const Home = () => {
    return (
        <>
            <SEO title={"Service Updates"} />

            <Navbar>
                <Flex minH={"40vh"} align={"center"} justify={"center"}>
                    <Text fontSize={{ md: "xl" }}>
                        Service Updates for AppalCART
                    </Text>
                </Flex>
            </Navbar>
        </>
    );
};

export default Home;
