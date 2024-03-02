import SEO from "@/components/seo";
import { Flex, Text } from "@chakra-ui/react";
import Navbar from "@/components/navbar";

const ServicesRural = () => {
  return (
    <>
      <SEO title={"Rural Services"} />

      <Navbar>
        <Flex minH={"40vh"} align={"center"} justify={"center"}>
          <Text fontSize={{ md: "xl" }}>Rural Services</Text>
        </Flex>
      </Navbar>
    </>
  );
};

export default ServicesRural;
