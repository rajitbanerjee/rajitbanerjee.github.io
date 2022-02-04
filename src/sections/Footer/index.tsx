import { Text, VStack, IconButton, HStack } from "@chakra-ui/react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer: React.FC = (): JSX.Element => {
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

interface Props {
  alt: string;
  icon: JSX.Element;
  href: string;
}

const IconLink: React.FC<Props> = ({ alt, icon, href }) => {
  return (
    <IconButton
      variant="ghost"
      aria-label={alt}
      icon={icon}
      size="lg"
      isRound
      onClick={() => window.open(href, "_blank")}
    ></IconButton>
  );
};

const getYearRange = (): string => {
  const start = 2021;
  const curr = new Date().getFullYear();
  return curr === start ? curr.toString() : `${start} - ${curr}`;
};

export default Footer;
