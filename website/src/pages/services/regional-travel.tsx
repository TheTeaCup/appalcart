import SEO from "@/components/seo";
import { Flex, Text } from "@chakra-ui/react";
import Navbar from "@/components/navbar";

const ServicesRegionalTravel = () => {
  return (
    <>
      <SEO title={"Regional Travel"} />

      <Navbar>
        <Flex minH={"40vh"} align={"center"} justify={"center"}>
          <Text fontSize={{ md: "xl" }}>Regional Travel</Text>
        </Flex>
      </Navbar>
    </>
  );
};

export default ServicesRegionalTravel;
