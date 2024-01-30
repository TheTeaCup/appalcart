import SEO from "@/components/seo";
import Navbar from "@/components/navbar";
import {
  AspectRatio,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";

const Home = () => {
  return (
    <>
      <SEO title={"Home"} />

      <Navbar>
        <Container maxW={"7xl"}>
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
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
              </Heading>
              <Text>
                Providing public transportation for the High Country since 1981
              </Text>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: "column", sm: "row" }}
              >
                <Button
                  as={NextLink}
                  href={"/services/paratransit"}
                  variant={"ghost"}
                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"normal"}
                  px={6}
                >
                  Paratransit
                </Button>
                <Button
                  as={NextLink}
                  href={"/route-maps-and-schedules"}
                  variant={"ghost"}
                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"normal"}
                  px={6}
                >
                  Fixed-Routes
                </Button>
                <Button
                  as={NextLink}
                  href={"/route-maps-and-schedules"}
                  variant={"ghost"}
                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"normal"}
                  px={6}
                >
                  Night Owl
                </Button>
              </Stack>
            </Stack>
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Box
                position={"relative"}
                height={"full"}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
                overflow={"hidden"}
              >
                <AspectRatio>
                  <iframe
                    src="https://www.youtube.com/embed/9LeVgqGI40Y?list=TLGGw3D4ubzv15QzMDAxMjAyNA"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </AspectRatio>

                {/*<Image
                              alt={"YouTube Video"}
                              fit={"cover"}
                              align={"center"}
                              w={"100%"}
                              h={"100%"}
                              src={"https://youtu.be/9LeVgqGI40Y?list=TLGGw3D4ubzv15QzMDAxMjAyNA"}
                          />
*/}
              </Box>
            </Flex>
          </Stack>
        </Container>
      </Navbar>
    </>
  );
};

export default Home;
