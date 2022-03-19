import { Button, Flex, Text, VStack } from "@chakra-ui/react";
import { ButtonLink, Card } from "components";
import { colors } from "config/colors";
import React from "react";

export const Skills: React.FC = (): JSX.Element => {
  return (
    <VStack
      w="100%"
      h="100%"
      backgroundImage={`url(/images/spotlight.jpg)`}
      backgroundSize="100%"
      backgroundRepeat="no-repeat"
      justifyContent="center"
    >
      <Card contents={<SkillsContents />} />
    </VStack>
  );
};

const SkillsContents: React.FC = (): JSX.Element => {
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
      <Text align="center">development</Text>
      <Flex justify="center" direction="row" wrap="wrap" gap="10px">
        <ButtonLink
          src="/images/tools/java.svg"
          alt="Java"
          href="https://www.oracle.com/ie/java/"
        />
        <ButtonLink
          src="/images/tools/python.svg"
          alt="Python"
          href="https://www.python.org/"
        />
        <ButtonLink
          src="/images/tools/ts.png"
          alt="TypeScript"
          href="https://www.typescriptlang.org"
        />
        <ButtonLink
          src="/images/tools/node.png"
          alt="NodeJS"
          href="https://nodejs.org/en/"
          imageHeight="25px"
        />
        <ButtonLink
          src="/images/tools/react.png"
          alt="ReactJS"
          href="https://reactjs.org"
        />
        <ButtonLink
          src="/images/tools/spring.png"
          alt="Spring"
          href="https://spring.io/projects/spring-boot"
        />
        <ButtonLink
          src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg"
          alt="GraphQL"
          href="https://graphql.org"
        />
        <ButtonLink
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
      <Text align="center">deployment, cloud & version control</Text>
      <Flex justify="center" direction="row" wrap="wrap" gap="10px">
        <ButtonLink
          src="/images/tools/aws.png"
          alt="AWS"
          href="https://aws.amazon.com/"
          imageHeight="25px"
        />
        <ButtonLink
          src="/images/tools/docker.png"
          alt="Docker"
          href="https://www.docker.com/"
        />
        <ButtonLink
          src="/images/tools/git.png"
          alt="Git"
          href="https://git-scm.com/"
          imageHeight="20px"
        />
      </Flex>
    </VStack>
  );
};

const Section3: React.FC = (): JSX.Element => {
  return (
    <VStack align="center" spacing={4}>
      <Text align="center">databases & big data</Text>
      <Flex justify="center" direction="row" wrap="wrap" gap="10px">
        <ButtonLink
          src="/images/tools/mysql.png"
          alt="MySQL"
          href="https://www.mysql.com/"
        />
        <ButtonLink
          src="/images/tools/dynamo.png"
          alt="DynamoDB"
          href="https://aws.amazon.com/dynamodb/"
        />
        <ButtonLink
          src="/images/tools/mongo.png"
          alt="MongoDB"
          href="https://www.mongodb.com/"
          imageHeight="20px"
        />
        <ButtonLink
          src="/images/tools/spark.png"
          alt="Apache Spark"
          href="https://spark.apache.org/"
          imageHeight="30px"
        />
      </Flex>
    </VStack>
  );
};

const Section4: React.FC = (): JSX.Element => {
  return (
    <VStack align="center" spacing={4}>
      <Text align="center">problem solving</Text>
      <Flex justify="center" direction="row" wrap="wrap" gap="10px">
        <ButtonLink
          src="/images/tools/aoc.jpg"
          alt="Advent of Code"
          href="https://github.com/rajitbanerjee/advent-of-code"
        />
        <ButtonLink
          src="/images/tools/kattis.png"
          alt="Kattis"
          href="https://github.com/rajitbanerjee/kattis"
        />
        <ButtonLink
          src="/images/tools/hackerrank.png"
          alt="HackerRank"
          href="https://www.hackerrank.com/rajit_banerjee"
        />
        <ButtonLink
          src="/images/tools/leetcode.png"
          alt="LeetCode"
          href="https://github.com/rajitbanerjee/leetcode"
        />
      </Flex>
    </VStack>
  );
};
