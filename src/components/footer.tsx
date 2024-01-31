import {
    Box,
    Container, Flex, Heading,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react"

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <Box
            bg={useColorModeValue("gray.50", "gray.800")}
            color={useColorModeValue("gray.700", "gray.200")}>
            <Container
                as={Stack}
                maxW={"6xl"}
                py={4}
                spacing={4}
                justify={"center"}
                align={"center"}>

                <Flex>
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
                </Flex>

                <Stack direction={"row"} spacing={6}>
                    <Box as="a" href={"#"}>
                        Home
                    </Box>
                    <Box as="a" href={"#"}>
                        About
                    </Box>
                    <Box as="a" href={"#"}>
                        Blog
                    </Box>
                    <Box as="a" href={"#"}>
                        Contact
                    </Box>
                </Stack>
            </Container>

            <Box
                borderTopWidth={1}
                borderStyle={"solid"}
                borderColor={useColorModeValue("gray.200", "gray.700")}>
                <Container
                    as={Stack}
                    maxW={"6xl"}
                    py={4}
                    direction={"column"}
                    spacing={4}
                    justify={{ base: "center", md: "space-between" }}
                    align={{ base: "center", md: "center" }}>
                    <Text>© {year} AppalCART. All rights reserved</Text>
                </Container>
            </Box>
        </Box>
    )
}

export default Footer;
