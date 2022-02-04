import { Button, Text, VStack, Flex } from "@chakra-ui/react";
import colors from "custom/colors";
import React from "react";
import LogoLink from "./LogoLink";

const Contents: React.FC = (): JSX.Element => {
  return (
    <VStack
      paddingTop="2rem"
      paddingRight="2rem"
      paddingLeft="2rem"
      paddingBottom="2rem"
      spacing={12}
    >
      <VStack spacing={12} align="center">
        <Text>$ ./skills</Text>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </VStack>
      <Button
        variant="outline"
        isFullWidth={false}
        borderColor={colors.fg}
        onClick={() =>
          window.open(
            "https://rajitbanerjee.com/resume/rajit_banerjee_resume.pdf",
            "_blank"
          )
        }
      >
        View Resume
      </Button>
    </VStack>
  );
};

const Section1: React.FC = (): JSX.Element => {
  return (
    <VStack align="center" spacing={4}>
      <Text>development</Text>
      <Flex direction="row" wrap="wrap" justify="center" gap="10px">
        <LogoLink
          src="/images/tools/java.svg"
          alt="Java"
          href="https://www.oracle.com/ie/java/"
        />
        <LogoLink
          src="/images/tools/python.svg"
          alt="Python"
          href="https://www.python.org/"
        />
        <LogoLink
          src="/images/tools/ts.png"
          alt="TypeScript"
          href="https://www.typescriptlang.org"
        />
        <LogoLink
          src="/images/tools/node.jpg"
          alt="NodeJS"
          href="https://nodejs.org/en/"
        />
        <LogoLink
          src="/images/tools/react.png"
          alt="ReactJS"
          href="https://reactjs.org"
        />
        <LogoLink
          src="/images/tools/spring.png"
          alt="Spring"
          href="https://spring.io/projects/spring-boot"
        />
        <LogoLink
          src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg"
          alt="GraphQL"
          href="https://graphql.org"
        />
        <LogoLink
          src="/images/tools/bash.png"
          alt="Bash"
          href="https://en.wikipedia.org/wiki/Bash_(Unix_shell)"
        />
      </Flex>
    </VStack>
  );
};

const Section2: React.FC = (): JSX.Element => {
  return (
    <VStack align="center" spacing={4}>
      <Text>deployment, cloud & version control</Text>
      <Flex direction="row" wrap="wrap" justify="center" gap="10px">
        <LogoLink
          src="/images/tools/aws.png"
          alt="AWS"
          href="https://aws.amazon.com/"
        />
        <LogoLink
          src="/images/tools/docker.png"
          alt="Docker"
          href="https://www.docker.com/"
        />
        <LogoLink
          src="/images/tools/git.svg"
          alt="Git"
          href="https://git-scm.com/"
        />
      </Flex>
    </VStack>
  );
};

const Section3: React.FC = (): JSX.Element => {
  return (
    <VStack align="center" spacing={4}>
      <Text>databases & big data</Text>
      <Flex direction="row" wrap="wrap" justify="center" gap="10px">
        <LogoLink
          src="/images/tools/mysql.png"
          alt="MySQL"
          href="https://www.mysql.com/"
        />
        <LogoLink
          src="/images/tools/dynamo.png"
          alt="DynamoDB"
          href="https://aws.amazon.com/dynamodb/"
        />
        <LogoLink
          src="/images/tools/mongo.png"
          alt="MongoDB"
          href="https://www.mongodb.com/"
        />
        <LogoLink
          src="/images/tools/spark.png"
          alt="Apache Spark"
          href="https://spark.apache.org/"
        />
      </Flex>
    </VStack>
  );
};

const Section4: React.FC = (): JSX.Element => {
  return (
    <VStack align="center" spacing={4}>
      <Text>problem solving</Text>
      <Flex direction="row" wrap="wrap" justify="center" gap="10px">
        <LogoLink
          src="/images/tools/aoc.jpg"
          alt="Advent of Code"
          href="https://github.com/rajitbanerjee/advent-of-code"
        />
        <LogoLink
          src="/images/tools/kattis.png"
          alt="Kattis"
          href="https://github.com/rajitbanerjee/kattis"
        />
        <LogoLink
          src="/images/tools/hackerrank.png"
          alt="HackerRank"
          href="https://www.hackerrank.com/rajit_banerjee"
        />
        <LogoLink
          src="/images/tools/leetcode.png"
          alt="LeetCode"
          href="https://github.com/rajitbanerjee/leetcode"
        />
      </Flex>
    </VStack>
  );
};

export default Contents;
