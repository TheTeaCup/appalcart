import SEO from "@/components/seo";
import { Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import NextLink from "next/link";

const FourOhFour = () => {
  return (
    <>
      <SEO title={"Page Not Found"} />

      <Navbar>
        <Flex minH={"80vh"} align={"center"} justify={"center"}>
          <VStack justify="center" spacing="4" as="section" textAlign="center">
            <Heading>Page Not Found</Heading>
            <Text fontSize={{ md: "xl" }}>
              {"You just hit a route that doesn't exist..."}
            </Text>
            <NextLink prefetch={false} href="/" passHref>
              <Button aria-label="Back to Home" colorScheme={"green"} size="lg">
                Back Home
              </Button>
            </NextLink>
          </VStack>
        </Flex>
      </Navbar>
    </>
  );
};

export default FourOhFour;
