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
import NextLink from "next/link";

const links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Abount",
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

interface Props {
  children: {
    name: string;
    url: string;
  };
}

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as={NextLink}
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={children.url}
    >
      {children.name}
    </Box>
  );
};

const Navbar = ({ children }: { children?: ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            right={0}
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
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
            </Box>
            <Center>
              <HStack spacing={4} display={{ base: "none", md: "flex" }}>
                {links.map((link) => (
                  <NavLink key={link.name}>{link}</NavLink>
                ))}
              </HStack>
            </Center>
          </HStack>
          <Flex alignItems={"center"}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
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
