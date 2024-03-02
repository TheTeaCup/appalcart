import SEO from "@/components/seo";
import { Flex, Text } from "@chakra-ui/react";
import Navbar from "@/components/navbar";

const ServicesAdvertising = () => {
  return (
    <>
      <SEO title={"Advertising"} />

      <Navbar>
        <Flex minH={"40vh"} align={"center"} justify={"center"}>
          <Text fontSize={{ md: "xl" }}>Advertising</Text>
        </Flex>
      </Navbar>
    </>
  );
};

export default ServicesAdvertising;
