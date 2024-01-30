import SEO from "@/components/seo";
import { Flex, Text } from "@chakra-ui/react";
import Navbar from "@/components/navbar";

const Home = () => {
    return (
        <>
            <SEO title={"Home"} />

            <Navbar>
                {/*
          <Center>
          <Grid templateColumns="repeat(5, 1fr)" gap={4}>
            <GridItem colSpan={2}>
              <Flex direction="row">
                <Text
                  fontFamily={"heading"}
                  fontSize={[
                    "2xl", // base
                    "3xl", // 480px upwards
                    "6xl", // 1200px upwards
                  ]}
                  as={"i"}
                  color={"red"}
                >
                  Appal
                </Text>
                <Text
                  fontFamily={"heading"}
                  fontSize={[
                    "2xl", // base
                    "3xl", // 480px upwards
                    "6xl", // 1200px upwards
                  ]}
                  color={"green"}
                  marginLeft={0}
                >
                  CART
                </Text>
              </Flex>
              <Text noOfLines={[1, 2]}>
                Providing Public Transportation Since 1981
              </Text>
            </GridItem>
            <GridItem colStart={4} colEnd={6}>
            </GridItem>
          </Grid>
        </Center>
          */}

                <Flex minH={"40vh"} align={"center"} justify={"center"}>
                    <Text fontSize={{ md: "xl" }}>
                        Employment Page
                    </Text>
                </Flex>
            </Navbar>
        </>
    );
};

export default Home;
