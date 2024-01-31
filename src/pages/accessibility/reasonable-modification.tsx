import SEO from "@/components/seo";
import { Flex, Text } from "@chakra-ui/react";
import Navbar from "@/components/navbar";

const AccessibilityReasonableModification = () => {
    return (
        <>
            <SEO title={"Accessibility"} />

            <Navbar>
                <Flex minH={"40vh"} align={"center"} justify={"center"}>
                    <Text fontSize={{ md: "xl" }}>Reasonable Modification</Text>
                </Flex>
            </Navbar>
        </>
    );
};

export default AccessibilityReasonableModification;
