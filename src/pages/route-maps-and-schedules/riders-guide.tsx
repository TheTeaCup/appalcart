import SEO from "@/components/seo";
import { Flex, Text } from "@chakra-ui/react";
import Navbar from "@/components/navbar";

const RoutesMapsSchedulesRidersGuide = () => {
    return (
        <>
            <SEO title={"Riders Guide"} />

            <Navbar>
                <Flex minH={"40vh"} align={"center"} justify={"center"}>
                    <Text fontSize={{ md: "xl" }}>
                        Riders Guide
                    </Text>
                </Flex>
            </Navbar>
        </>
    );
};

export default RoutesMapsSchedulesRidersGuide;
