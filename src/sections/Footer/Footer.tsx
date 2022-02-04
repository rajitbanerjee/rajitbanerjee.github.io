import { HStack, Text, VStack } from "@chakra-ui/react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import IconLink from "./IconLink";

export const Footer: React.FC = (): JSX.Element => {
  return (
    <VStack
      position="relative"
      bottom={0}
      width="100%"
      paddingTop="10rem"
      paddingBottom="2rem"
      spacing={7}
    >
      <HStack spacing={5}>
        <IconLink
          alt="LinkedIn"
          icon={<FaLinkedinIn />}
          href="https://www.linkedin.com/in/rajitbanerjee"
        />
        <IconLink
          alt="GitHub"
          icon={<FaGithub />}
          href="https://github.com/rajitbanerjee"
        />
        <IconLink
          alt="Email"
          icon={<AiOutlineMail />}
          href="mailto:rajit.banerjee@ucdconnect.ie"
        />
      </HStack>
      <Text>&copy; {getYearRange()} Rajit Banerjee</Text>
    </VStack>
  );
};

const getYearRange = (): string => {
  const start = 2021;
  const curr = new Date().getFullYear();
  return curr === start ? curr.toString() : `${start}-${curr}`;
};
