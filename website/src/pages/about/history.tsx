import SEO from "@/components/seo";
import { chakra, Container, Flex, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "@/components/navbar";

import history from "@/data/history.json";
import { TimelineCard, EmptyCard } from "@/components/timeline/card.tsx";
import TimeLineDot from "@/components/timeline/lineDot.tsx";

const AboutHistory = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <>
      <SEO title={"History"} />

      <Navbar>
        <Container maxWidth="7xl" p={{ base: 2, sm: 10 }}>
          <chakra.h3
            fontSize="4xl"
            fontWeight="bold"
            mb={18}
            textAlign="center"
          >
            Our History...
          </chakra.h3>
          {history.map((event) => (
            <Flex key={event.id} mb="10px">
              {isDesktop && event.id % 2 === 0 && (
                <>
                  <EmptyCard />
                  <TimeLineDot />
                  <TimelineCard {...event} />
                </>
              )}

              {isMobile && (
                <>
                  <TimeLineDot />
                  <TimelineCard {...event} />
                </>
              )}

              {isDesktop && event.id % 2 !== 0 && (
                <>
                  <TimelineCard {...event} />
                  <TimeLineDot />
                  <EmptyCard />
                </>
              )}
            </Flex>
          ))}
        </Container>
      </Navbar>
    </>
  );
};

export default AboutHistory;
