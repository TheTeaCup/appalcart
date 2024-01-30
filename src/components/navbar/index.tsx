import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
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
    name: "About",
    sections: [
      {
        name: "Who We Are",
        url: "/about/",
      },
      {
        name: "History",
        url: "/about/history",
      },
      {
        name: "Board of Directors",
        url: "/about/board-of-directors",
      },
      {
        name: "Title VI",
        url: "/about/title-vi",
      },
    ],
  },
  {
    name: "Routes & Schedules",
    sections: [
      {
        name: "Route Maps and Schedules",
        url: "/route-maps-and-schedules/",
      },
      {
        name: "Live Bus Tracking",
        url: "/route-maps-and-schedules/live-transit",
      },
      {
        name: "Game Day Routes",
        url: "/route-maps-and-schedules/game-day",
      },
      {
        name: "Inclement Weather Alterations",
        url: "/route-maps-and-schedules/inclement-weather",
      },
      {
        name: "Riders Guide",
        url: "/route-maps-and-schedules/riders-guide",
      },
    ],
  },
  {
    name: "Services",
    sections: [
      {
        name: "Fixed Route",
        url: "/services/fixed-route",
      },
      {
        name: "Paratransit",
        url: "/services/paratransit",
      },
      {
        name: "Rural Services",
        url: "/services/rural-services",
      },
      {
        name: "Regional Travel",
        url: "/services/advertising",
      },
      {
        name: "Advertising",
        url: "/services/advertising",
      },
    ],
  },
  {
    name: "Accessibility",
    sections: [
      {
        name: "Accessibility on Fixed Route",
        url: "/accessibility",
      },
      {
        name: "Reasonable Modification",
        url: "/accessibility/reasonable-modification",
      },
    ],
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
                {links.map((link) => {
                  if (link.sections) {
                    return (
                      <div key={link.name}>
                        {/* drop down with other sections */}
                        <Menu>
                          <MenuButton as={Button} variant={"ghost"}>
                            {link.name}
                          </MenuButton>
                          <MenuList>
                            {link.sections.map((section) => (
                              <MenuItem
                                as={NextLink}
                                href={section.url}
                                key={section.name}
                              >
                                <Box fontWeight={"semibold"} px={2} py={1}>
                                  {section.name}
                                </Box>
                              </MenuItem>
                            ))}
                          </MenuList>
                        </Menu>
                      </div>
                    );
                  } else {
                    return <NavLink key={link.name}>{link}</NavLink>;
                  }
                })}
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
              {links.map((link) => {
                if (link.sections) {
                  return (
                    <div key={link.name}>
                      {/* todo: use a list here */}
                      <Heading as={"h3"} size={"md"}>
                        {link.name}
                      </Heading>
                      <Stack as={"nav"} spacing={4} pl={4}>
                        {link.sections.map((section) => (
                          <NavLink key={section.name}>{section}</NavLink>
                        ))}
                      </Stack>
                    </div>
                  );
                } else {
                  return <NavLink key={link.name}>{link}</NavLink>;
                }
              })}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>{children}</Box>
    </>
  );
};

export default Navbar;
