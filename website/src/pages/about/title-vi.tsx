import SEO from "@/components/seo";
import { Flex, Heading, Text } from "@chakra-ui/react";
import Navbar from "@/components/navbar";

const AboutTitleVI = () => {
  return (
    <>
      <SEO title={"Title VI"} />

      <Navbar>
        <Heading as={"h2"} size={"lg"} textAlign={"center"}>
          Nondiscrimination Policy Statement
        </Heading>

        <Text mt={5} textAlign={"center"}>
          It is the policy of AppalCART as a federal-aid recipient, to ensure
          that no person shall, on the ground of race, color, national origin,
          sex, creed (religion), age or disability, be excluded from
          participation in, be denied the benefits of, or be otherwise subjected
          to discrimination under any of our programs and activities, as
          provided by Title VI of the Civil Rights Act of 1964, the Civil Rights
          Restoration Act of 1987, and all other related nondiscrimination laws
          and requirements.
        </Text>

        <Text mt={5} textAlign={"center"}>
          AppalCART operates its programs and services without regard to race,
          color, and national origin in accordance with the Title VI of the
          Civil Rights Act. Any person who believes she or he has been aggrieved
          by any unlawful or discriminatory practice under Title VI may follow a
          complaint with AppalCART, the public transportation authority serving
          Boone and all of Watauga County.
        </Text>

        <Text mt={5} textAlign={"center"}>
          For more information on AppalCART's Title VI program and the
          procedures to file a complaint, contact the Transportation Director at
          828.297.1300 extension 104. You may also email the Transportation
          Director at director@appalcart.com or visit our office at 305 NC
          Highway 105 Bypass, Boone NC 28607.
        </Text>

        <Text mt={5} textAlign={"center"}>
          A complaint may be filed with the North Carolina Department of
          Transportation, Office of Equal Opportunity and Workforce Services,
          External Civil Rights Section, 1511 Mail Service Center, Raleigh, NC
          27699-1511; phone 919.508.1830 or toll-free 800.522.0453. A complaint
          may also be filed directly with the Federal Transit Administration by
          filing a complaint with the office of Civil Rights, Attention: Title
          VI Coordinator, East Building, 5th Floor - TCR, 1200 New Jersey Ave,
          SE, Washington, DC 20590.
        </Text>

        <Text mt={5} textAlign={"center"}>
          A complaint must be filed in writing within 180 days of the alleged
          discriminatory act. A complaint form is listed in the appendix of our
          Title VI plan (linked at the bottom) or by requesting one by emailing,
          calling, or writing the Transportation Director as listed above.
        </Text>

        <Text mt={5} textAlign={"center"}>
          If needed, you may request a copy of the program in an alternative
          format in accordance with ADA and LEP regulations. AppalCART offers
          our information in Spanish at no cost to the individual. Services
          include but are not limited to the following: oral interpreters,
          written language services, and translations of vital documents for the
          purpose of using our transit system.
        </Text>
      </Navbar>
    </>
  );
};

export default AboutTitleVI;
