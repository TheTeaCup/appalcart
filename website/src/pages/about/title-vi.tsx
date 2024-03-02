import SEO from "@/components/seo";
import { Flex, Text } from "@chakra-ui/react";
import Navbar from "@/components/navbar";

const AboutTitleVI = () => {
  return (
    <>
      <SEO title={"Title VI"} />

      <Navbar>
        <Flex minH={"40vh"} align={"center"} justify={"center"}>
          <Text fontSize={{ md: "xl" }}>Title VI</Text>
        </Flex>
      </Navbar>
    </>
  );
};

export default AboutTitleVI;
