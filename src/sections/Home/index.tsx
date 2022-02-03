import { VStack, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Home: React.FC = (): JSX.Element => {
  return (
    <VStack>
      <Heading>Rajit Banerjee</Heading>
      <Text>4th Year Undergraduate Student</Text>
      <Text
        as="a"
        href="https://ucd.ie/cs"
        target="_blank"
        rel="noopener noreferrer"
      >
        UCD School of Computer Science
      </Text>
    </VStack>
  );
};

export default Home;
