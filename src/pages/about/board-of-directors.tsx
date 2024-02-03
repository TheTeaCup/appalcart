import SEO from "@/components/seo";
import {Avatar, Center, chakra, Container, Divider, Flex, Heading, SimpleGrid, Text, VStack} from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import BoardOfDirectors from "@/data/board_of_directors.json";


const AboutBoardOfDirectors = () => {
  return (
    <>
      <SEO title={"Board of Directors"} />

      <Navbar>
          <Container maxWidth="7xl" p={{ base: 2, sm: 10 }}>
              <VStack spacing={8} align="center">
                  <Heading fontSize="4xl" fontWeight="bold">
                      Board of Directors
                  </Heading>
                  <Text textAlign="center" fontSize="lg">
                      The AppalCART Board oversees the operation of the Paratransit and Fixed Route systems in Watauga County, North Carolina.
                      Eight members comprise the board, and members of the AppalCART Board must be appointed by the Watauga County Commissioners.
                      All members must reside within the territorial jurisdiction of AppalCART.
                      The AppalCART Board has a wide variety of members representing various interests and occupations in the community.
                  </Text>
              </VStack>

              <Center>
                  <Divider
                      css={{ borderBottomWidth: "3px" }}
                      size={"10px"}
                      width={"50%"}
                      mt={5}
                      mb={5}
                  />
              </Center>

              <Center mt={5}>
                  <SimpleGrid
                      columns={[1, 2]}
                      spacing={20}
                      justifyContent="center"
                      justifyItems="center"
                      placeContent={"center"}
                      mb={5}
                  >
              {BoardOfDirectors.map((member) => (
                  <div key={member.id}>
                        <VStack spacing={4} align="center">
                            {/*<chakra.img*/}
                            {/*    src={member.image}*/}
                            {/*    alt={member.name}*/}
                            {/*    borderRadius="full"*/}
                            {/*    boxSize="150px"*/}
                            {/*    objectFit="cover"*/}
                            {/*/>*/}
                            <Avatar
                                bg={"green.400"}
                                color={"white"}
                                src={member.image}
                                name={member.name}
                                size="2xl"
                            />
                            <Text fontSize="xl" fontWeight="bold">
                                {member.name}
                            </Text>
                            <Text mt={-5} fontSize="lg">
                                {member.title}
                            </Text>
                        </VStack>
                  </div>
                  ))}
                  </SimpleGrid>
              </Center>

          </Container>
      </Navbar>
    </>
  );
};

export default AboutBoardOfDirectors;
