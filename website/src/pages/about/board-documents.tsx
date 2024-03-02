import SEO from "@/components/seo";
import { Flex, Text } from "@chakra-ui/react";
import Navbar from "@/components/navbar";

const AboutBoardDocuments = () => {
  return (
    <>
      <SEO title={"Board Documents"} />

      <Navbar>
        <Flex minH={"40vh"} align={"center"} justify={"center"}>
          <Text fontSize={{ md: "xl" }}>Board Documents</Text>
        </Flex>
      </Navbar>
    </>
  );
};

export default AboutBoardDocuments;
