import {
  Box,
  chakra,
  HStack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

interface CardProps {
  id: number;
  title: string;
  description: string;
  date: string;
}

const TimelineCard = ({ id, title, description, date }: CardProps) => {
  // For even id show card on left side
  // For odd id show card on right side
  const isEvenId = id % 2 == 0;
  let borderWidthValue = isEvenId ? "15px 15px 15px 0" : "15px 0 15px 15px";
  let leftValue = isEvenId ? "-15px" : "unset";
  let rightValue = isEvenId ? "unset" : "-15px";

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = "-15px";
    rightValue = "unset";
    borderWidthValue = "15px 15px 15px 0";
  }

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg={useColorModeValue("gray.100", "gray.800")}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: '""',
        w: "0",
        h: "0",
        borderColor: `transparent ${useColorModeValue("#edf2f6", "#1a202c")} transparent`,
        borderStyle: "solid",
        borderWidth: borderWidthValue,
        position: "absolute",
        left: leftValue,
        right: rightValue,
        display: "block",
      }}
    >
      <Box>
        <Text fontSize="lg">{date}</Text>

        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%">
            {title}
          </chakra.h1>
          <Text
            fontSize="md"
            dangerouslySetInnerHTML={{
              __html: description.replace(/\n/g, "<br>"),
            }}
          />
        </VStack>
      </Box>
    </HStack>
  );
};

const EmptyCard = () => {
  return (
    <Box
      flex={{ base: 0, md: 1 }}
      p={{ base: 0, md: 6 }}
      bg="transparent"
    ></Box>
  );
};

export { EmptyCard, TimelineCard };
