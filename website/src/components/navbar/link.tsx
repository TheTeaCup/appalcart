import { Button } from "@chakra-ui/react";
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
    <Button
      fontWeight={"semibold"}
      as={NextLink}
      px={2}
      py={1}
      rounded={"md"}
      variant={"ghost"}
      href={children.url}
    >
      {children.name}
    </Button>
  );
};

export default NavLink;
