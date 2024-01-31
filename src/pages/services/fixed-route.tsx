import SEO from "@/components/seo";
import { Flex, Text } from "@chakra-ui/react";
import Navbar from "@/components/navbar";

const ServicesFixedRoute = () => {
  return (
    <>
      <SEO title={"Fixed Routes"} />

      <Navbar>
        <Flex minH={"40vh"} align={"center"} justify={"center"}>
          <Text fontSize={{ md: "xl" }}>Fixed Route</Text>
        </Flex>
      </Navbar>
    </>
  );
};

export default ServicesFixedRoute;
