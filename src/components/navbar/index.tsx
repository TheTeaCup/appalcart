import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  IconButton,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { ReactNode } from "react";
import NavLink from "@/components/navbar/link.tsx";
import NextLink from "next/link";

const links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Routes & Schedules",
    url: "/route-maps-and-schedules",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Accessibility",
    url: "/accessibility",
  },
  {
    name: "Employment",
    url: "/employment",
  },
  {
    name: "Contact Us",
    url: "/contact-us",
  },
];

const Navbar = ({ children }: { children?: ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <NextLink href={"/"}>
                <Flex direction="row">
                  <Text
                    fontFamily={"heading"}
                    fontSize={"xl"}
                    as={"i"}
                    color={"red"}
                  >
                    Appal
                  </Text>
                  <Text
                    fontFamily={"heading"}
                    fontSize={"xl"}
                    color={"green"}
                    marginLeft={0}
                  >
                    CART
                  </Text>
                </Flex>
              </NextLink>
            </Box>
          </HStack>

          <Flex>
            <Center>
              <HStack spacing={4} display={{ base: "none", md: "flex" }}>
                {links.map((link) => (
                  <NavLink key={link.name}>{link}</NavLink>
                ))}
              </HStack>
            </Center>
          </Flex>

          <Flex alignItems={"center"}>
            <Button size={"md"} onClick={toggleColorMode} mr={1}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {links.map((link) => (
                <NavLink key={link.name}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>{children}</Box>
    </>
  );
};

export default Navbar;
