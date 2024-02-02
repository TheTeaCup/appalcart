import { Box, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";

interface CircleProps {
  initials: string;
  bgColor: string;
  name: string;
  pdf: string;
}

const Circle = ({ initials, bgColor, name, pdf }: CircleProps) => {
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
            <Text fontSize="2xl" fontWeight="bold" color="white">
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
