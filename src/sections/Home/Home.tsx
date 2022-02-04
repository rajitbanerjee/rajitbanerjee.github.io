import { HStack, Text, VStack } from "@chakra-ui/react";
import ExternalURL from "components/ExternalURL";
import colors from "custom/colors";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import TypeWriterEffect from "react-typewriter-effect";

export const Home: React.FC = (): JSX.Element => {
  return (
    <VStack align="left" spacing={12} justifyContent="center" height="100vh">
      <Name />
      <Job />
      <Contact />
    </VStack>
  );
};

const Name: React.FC = (): JSX.Element => {
  return (
    <VStack align="left" spacing={7}>
      <Text>$ /usr/bin/whoami</Text>
      <TypeWriterEffect
        textStyle={{ fontSize: "30px" }}
        startDelay={100}
        cursorColor={colors.accent}
        text="Rajit Banerjee"
        typeSpeed={100}
        hideCursorAfterText
      />
    </VStack>
  );
};

const Job: React.FC = (): JSX.Element => {
  return (
    <VStack align="left" spacing={1}>
      <Text>4th Year Undergraduate Student</Text>
      <ExternalURL
        text="UCD School of Computer Science"
        href="https://ucd.ie/cs"
      />
    </VStack>
  );
};

const Contact: React.FC = (): JSX.Element => {
  return (
    <VStack align="left" spacing={7}>
      <Text>$ cat contact.md</Text>
      <HStack spacing={7}>
        <HStack>
          <FaLinkedinIn size={20} />
          <ExternalURL
            text="LinkedIn"
            href="https://www.linkedin.com/in/rajitbanerjee"
          />
        </HStack>

        <HStack>
          <FaGithub size={20} />
          <ExternalURL text="GitHub" href="https://github.com/rajitbanerjee" />
        </HStack>

        <HStack>
          <AiOutlineMail size={20} />
          <ExternalURL
            text="Email"
            href="mailto:rajit.banerjee@ucdconnect.ie"
          />
        </HStack>
      </HStack>
    </VStack>
  );
};
