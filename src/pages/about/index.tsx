import SEO from "@/components/seo";
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import NextLink from "next/link";

const AboutHome = () => {
  return (
    <>
      <SEO title={"About"} />

      <Navbar>
        <Flex minH={"40vh"} align={"center"} justify={"center"}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text as={"i"} position={"relative"} color={"red.400"}>
              Appal
            </Text>
            <Text as={"span"} color={"green.400"}>
              CART
            </Text>

            {/*<Text>*/}
            {/*    AppalCART is Watauga {"County's"} Public Transportation Authority since 1981 in which we are committed to keeping the High Country moving.*/}
            {/*    Our services began as Appalachian Campus Area Rapid Transit, and thus, it became AppalCART.*/}
            {/*    Initial services began in 1980, but AppalCART became the official and first bus transit system for Boone, North Carolina in 1981.*/}
            {/*    Our priorities are to provide safe, reliable, and courteous service to our passengers.*/}
            {/*</Text>*/}
          </Heading>
        </Flex>

        <Stack direction={{ base: "column", md: "row" }}>
          <Flex p={8} flex={1} align={"center"} justify={"center"}>
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                <Text as={"span"} position={"relative"}>
                  Our Mission
                </Text>
              </Heading>
              <Text
                as={"i"}
                fontSize={{ base: "md", lg: "lg" }}
                color={"gray.500"}
              >
                AppalCART provides sustainable, high-quality <br />{" "}
                transportation services.
              </Text>
            </Stack>
          </Flex>
          <Flex flex={1}>
            <Image
              draggable={false}
              alt={"Login Image"}
              objectFit={"cover"}
              src={"/appalcart.webp"}
            />
          </Flex>
        </Stack>

        <Stack mt={5} direction={{ base: "column", md: "row" }}>
          <Flex flex={1}>
            <Image
              draggable={false}
              alt={"Login Image"}
              objectFit={"cover"}
              src={"/about_services.webp"}
            />
          </Flex>
          <Flex p={8} flex={1} align={"center"} justify={"center"}>
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                <Text as={"span"} position={"relative"}>
                  Our Services
                </Text>
              </Heading>
              <Text
                as={"i"}
                fontSize={{ base: "md", lg: "lg" }}
                color={"gray.500"}
              >
                AppalCART provides 13 fare-free, fixed bus routes, <br />
                and 10 routes via our van services (Paratransit, Rural General
                Public, and Project on Aging).
              </Text>
              <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                <Button
                  as={NextLink}
                  href={"/services/fixed-route"}
                  rounded={"full"}
                >
                  Fixed Routes
                </Button>
                <Button
                  as={NextLink}
                  href={"/services/paratransit"}
                  rounded={"full"}
                >
                  Paratransit
                </Button>
                <Button
                  as={NextLink}
                  href={"/services/rural-services"}
                  rounded={"full"}
                >
                  Rural Services
                </Button>
              </Stack>
            </Stack>
          </Flex>
        </Stack>
      </Navbar>
    </>
  );
};

export default AboutHome;
