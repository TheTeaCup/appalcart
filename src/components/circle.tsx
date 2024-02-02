import { Box, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";

interface CircleProps {
  initials: string;
  initialsColor?: string;
  bgColor: string;
  name: string;
  pdf: string;
}

const Circle = ({
  initials,
  initialsColor,
  bgColor,
  name,
  pdf,
}: CircleProps) => {
  return (
    <Box key={name} textAlign="center">
      <NextLink href={pdf} target="_about">
        <VStack>
          <Box
            width="80px"
            height="80px"
            borderRadius="full"
            bg={bgColor}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              color={initialsColor ? initialsColor : "white"}
              fontSize="3xl"
              fontWeight="bold"
            >
              {initials}
            </Text>
          </Box>
          <Text fontSize="lg" fontWeight="bold" mt={2}>
            {name}
          </Text>
        </VStack>
      </NextLink>
    </Box>
  );
};

export default Circle;
