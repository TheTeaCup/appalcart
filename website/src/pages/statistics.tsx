import SEO from "@/components/seo";
import { Flex, Text } from "@chakra-ui/react";
import Navbar from "@/components/navbar";

const Statistics = () => {
  return (
    <>
      <SEO title={"Statistics"} />

      <Navbar>
        <Flex minH={"40vh"} align={"center"} justify={"center"}>
          <Text fontSize={{ md: "xl" }}>Statistics</Text>
        </Flex>
      </Navbar>
    </>
  );
};

export default Statistics;
