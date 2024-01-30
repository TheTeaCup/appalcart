import SEO from "@/components/seo";
import { Text } from "@chakra-ui/react";
import Navbar from "@/components/navbar";

const Home = () => {
  return (
    <>
      <SEO title={"Home"} />

      <Navbar>
        <Text>Home</Text>
      </Navbar>
    </>
  );
};

export default Home;
