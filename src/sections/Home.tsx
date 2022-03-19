import { HStack, Text, VStack } from "@chakra-ui/react";
import { TextLink } from "components";
import { socialLinks } from "config/social";
import React from "react";
import Typewriter, { TypewriterClass } from "typewriter-effect";

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
      <Typewriter
        onInit={(typewriter: TypewriterClass) => {
          typewriter
            .typeString('<span style="font-size: 175%;">Rajit Banerjee</span>')
            .pauseFor(100)
            .start();
        }}
        options={{
          cursor: "",
          delay: 75,
        }}
      />
    </VStack>
  );
};

const Job: React.FC = (): JSX.Element => {
  return (
    <VStack align="left" spacing={1}>
      <Text>4th Year Undergraduate Student</Text>
      <TextLink
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
        {socialLinks.map(({ alt: text, icon, href }, i) => (
          <HStack key={i.toString()}>
            {icon.home}
            <TextLink text={text} href={href} />
          </HStack>
        ))}
      </HStack>
    </VStack>
  );
};
