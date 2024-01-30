import SEO from "@/components/seo";
import { Flex, Text } from "@chakra-ui/react";
import Navbar from "@/components/navbar";

const RoutesMapsSchedulesHome = () => {
    return (
        <>
            <SEO title={"Route Maps and Schedules"} />

            <Navbar>
                <Flex minH={"40vh"} align={"center"} justify={"center"}>
                    <Text fontSize={{ md: "xl" }}>
                        Route Maps and Schedules
                    </Text>
                </Flex>
            </Navbar>
        </>
    );
};

export default RoutesMapsSchedulesHome;
