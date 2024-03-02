import SEO from "@/components/seo";
import { Flex, Text } from "@chakra-ui/react";
import Navbar from "@/components/navbar";

const ServicesParatransit = () => {
  return (
    <>
      <SEO title={"Paratransit Services"} />

      <Navbar>
        <Flex minH={"40vh"} align={"center"} justify={"center"}>
          <Text fontSize={{ md: "xl" }}>Paratransit Services</Text>
        </Flex>
      </Navbar>
    </>
  );
};

export default ServicesParatransit;
