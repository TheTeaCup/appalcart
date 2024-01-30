import SEO from "@/components/seo";
import { Flex, Text } from "@chakra-ui/react";
import Navbar from "@/components/navbar";

const RoutesMapsSchedulesLiveTransit = () => {
    return (
        <>
            <SEO title={"Live Transit"} />

            <Navbar>
                <Flex minH={"40vh"} align={"center"} justify={"center"}>
                    <Text fontSize={{ md: "xl" }}>
                        Live Transit
                    </Text>
                </Flex>
            </Navbar>
        </>
    );
};

export default RoutesMapsSchedulesLiveTransit;
