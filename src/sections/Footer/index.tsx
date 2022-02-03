import { Text, VStack, IconButton, HStack } from "@chakra-ui/react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer: React.FC = (): JSX.Element => {
  return (
    <VStack
      position="absolute"
      bottom={0}
      width="1.0"
      height="7rem"
      spacing={7}
    >
      <HStack spacing={5}>
        <IconButton
          variant="outline"
          aria-label="LinkedIn"
          icon={<FaLinkedinIn />}
          isRound
          onClick={() =>
            window.open("https://www.linkedin.com/in/rajitbanerjee", "_blank")
          }
        ></IconButton>
        <IconButton
          variant="outline"
          aria-label="GitHub"
          icon={<FaGithub />}
          isRound
          onClick={() =>
            window.open("https://github.com/rajitbanerjee", "_blank")
          }
        ></IconButton>
        <IconButton
          variant="outline"
          aria-label="Email"
          icon={<AiOutlineMail />}
          isRound
          onClick={() =>
            window.open("mailto:rajit.banerjee@ucdconnect.ie", "_blank")
          }
        ></IconButton>
      </HStack>
      <Text>&copy; {getYearRange()} Rajit Banerjee</Text>
    </VStack>
  );
};

const getYearRange = (): string => {
  const start = 2022;
  const curr = new Date().getFullYear();
  return curr === start ? curr.toString() : `${start} - ${curr}`;
};

export default Footer;
