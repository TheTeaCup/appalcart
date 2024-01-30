import { Box, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

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

export default NavLink;
