import SEO from "@/components/seo";
import { Flex, Text } from "@chakra-ui/react";
import Navbar from "@/components/navbar";

const ContactUs = () => {
  return (
    <>
      <SEO title={"Contact Us"} />

      <Navbar>
        <Flex minH={"40vh"} align={"center"} justify={"center"}>
          <Text fontSize={{ md: "xl" }}>Contact Us Page</Text>
        </Flex>
      </Navbar>
    </>
  );
};

export default ContactUs;
