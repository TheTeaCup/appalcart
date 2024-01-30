import SEO from "@/components/seo";
import { Flex, Text } from "@chakra-ui/react";
import Navbar from "@/components/navbar";

const RoutesMapsSchedulesInclementWeather = () => {
  return (
    <>
      <SEO title={"Inclement Weather"} />

      <Navbar>
        <Flex minH={"40vh"} align={"center"} justify={"center"}>
          <Text fontSize={{ md: "xl" }}>Inclement Weather</Text>
        </Flex>
      </Navbar>
    </>
  );
};

export default RoutesMapsSchedulesInclementWeather;
