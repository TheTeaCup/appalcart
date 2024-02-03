import SEO from "@/components/seo";
import {
  Center,
  Divider,
  Grid,
  GridItem,
  Image,
  SimpleGrid,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import NextLink from "next/link";
import Routes from "@/data/routes.json";
import BreakRoutes from "@/data/break_routes.json";
import NightOwl from "@/data/night_owl_routes.json";
import Circle from "@/components/circle.tsx";

const RoutesMapsSchedulesHome = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <SEO title={"Route Maps and Schedules"} />

      <Navbar>
        <Text fontSize="3xl" textAlign="center" fontWeight="bold">
          System Maps
        </Text>
        <Text fontSize="lg" textAlign="center">
          Effective August 2023
        </Text>

        <Center height={"fit-content"} mt={5}>
          <Grid templateColumns="repeat(5, 1fr)" gap={5}>
            <GridItem colSpan={2}>
              <NextLink href={"/routes/whole_system.pdf"} target={"_about"}>
                <VStack>
                  <Image
                    boxSize="100px"
                    objectFit="cover"
                    src={"/apple.webp"}
                    draggable={false}
                    alt="Apple"
                  />
                  <Text fontSize="lg" fontWeight="bold">
                    Bus Routes
                  </Text>
                </VStack>
              </NextLink>
            </GridItem>
            <GridItem colStart={4} colEnd={6}>
              <NextLink
                href={"/routes/night_owl/all_routes.pdf"}
                target={"_about"}
              >
                <VStack>
                  <Image
                    boxSize="100px"
                    objectFit="cover"
                    src={
                      colorMode === "dark"
                        ? "/night-owl-light.webp"
                        : "/night-owl.webp"
                    }
                    draggable={false}
                    alt="Apple"
                  />
                  <Text fontSize="lg" fontWeight="bold">
                    Night Owl
                  </Text>
                </VStack>
              </NextLink>
            </GridItem>
          </Grid>
        </Center>

        <Center>
          <Divider
              css={{ borderBottomWidth: "3px" }}
              size={"10px"}
              width={"50%"}
              mt={5}
              mb={5}
          />
        </Center>

        <Text fontSize="3xl" textAlign="center" fontWeight="bold">
          Route maps and schedules
        </Text>
        <Text fontSize="lg" textAlign="center">
          Effective August 2023
        </Text>

        <Center mt={5}>
          <SimpleGrid
            columns={[1, 2, 4]}
            spacing={10}
            justifyContent="center"
            justifyItems="center"
            placeContent={"center"}
            mb={5}
          >
            {Routes.map((route) => {
              return (
                <Circle
                  key={route.name}
                  initials={route.initials}
                  bgColor={route.hex}
                  name={route.name}
                  pdf={route.pdf}
                />
              );
            })}
          </SimpleGrid>
        </Center>

        <Center>
          <Divider
              css={{ borderBottomWidth: "3px" }}
              size={"10px"}
              width={"50%"}
              mt={5}
              mb={5}
          />
        </Center>

        <Text fontSize="3xl" textAlign="center" fontWeight="bold">
          Break Schedule Routes
        </Text>
        <Text fontSize="lg" textAlign="center">
          Effective August 2023
        </Text>
        <Text mt={2} fontSize="md" textAlign="center">
          Break Schedule Routes operate during ASU Winter, Summer, and Holiday
          Breaks
        </Text>

        <Center mt={5}>
          <SimpleGrid
            columns={[1, 2, 4]}
            spacing={10}
            justifyContent="center"
            justifyItems="center"
            placeContent={"center"}
            mb={5}
          >
            {BreakRoutes.map((route) => {
              return (
                <Circle
                  key={route.name}
                  initials={route.initials}
                  bgColor={route.hex}
                  name={route.name}
                  pdf={route.pdf}
                />
              );
            })}
          </SimpleGrid>
        </Center>

        <Center>
          <Divider
              css={{ borderBottomWidth: "3px" }}
              size={"10px"}
              width={"50%"}
              mt={5}
              mb={5}
          />
        </Center>

        <Text fontSize="3xl" textAlign="center" fontWeight="bold">
          Night Owl Routes
        </Text>
        <Text fontSize="lg" textAlign="center">
          Maps effective as of July 2021
        </Text>

        <Center mt={5}>
          <SimpleGrid
            columns={[1, 2, 3]}
            spacing={10}
            justifyContent="center"
            justifyItems="center"
            placeContent={"center"}
            mb={5}
          >
            {NightOwl.map((route) => {
              return (
                <Circle
                  key={route.name}
                  initials={route.initials}
                  initialsColor={route.initialsHex}
                  bgColor={route.hex}
                  name={route.name}
                  pdf={route.pdf}
                />
              );
            })}
          </SimpleGrid>
        </Center>

        <Center>
          <Divider
              css={{ borderBottomWidth: "3px" }}
              size={"10px"}
              width={"50%"}
              mt={5}
              mb={5}
          />
        </Center>

        <Text fontSize="3xl" textAlign="center" fontWeight="bold">
          Using Google Maps to Find a Route
        </Text>
        <Text fontSize="lg" textAlign="center">
        {/*  If you are unable to use our latest real-time app,*/}
        {/*  you can still find if a route comes near you*/}
        {/*  or determine which route to take by using Google Maps.*/}
        {/*  The following example is from using Google Maps on a desktop computer. <br/>*/}
        {/*  Please note this is an example and the times resulting below will need to be checked for the current day.*/}
        To Do
        </Text>

      </Navbar>
    </>
  );
};

export default RoutesMapsSchedulesHome;
