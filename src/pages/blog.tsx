import SEO from "@/components/seo";
import { Flex, Text } from "@chakra-ui/react";
import Navbar from "@/components/navbar";

const Blog = () => {
    return (
        <>
            <SEO title={"Blog"} />

            <Navbar>
                <Flex minH={"40vh"} align={"center"} justify={"center"}>
                    <Text fontSize={{ md: "xl" }}>Blog</Text>
                </Flex>
            </Navbar>
        </>
    );
};

export default Blog;
