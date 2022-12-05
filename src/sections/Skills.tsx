import { Button, Flex, Text, VStack } from "@chakra-ui/react";
import { ButtonLink, Card } from "components";
import { colors } from "config/colors";
import { backgroundImage, cv, tools } from "config/skills";

export const Skills: React.FC = (): JSX.Element => {
    return (
        <VStack
            w="100%"
            h="100%"
            backgroundImage={`url(${backgroundImage})`}
            backgroundSize="contain"
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            justifyContent="center"
        >
            <Card contents={<Contents />} />
        </VStack>
    );
};

const Contents: React.FC = (): JSX.Element => {
    return (
        <VStack
            padding="2rem"
            spacing={12}
        >
            <VStack
                spacing={12}
                align="center"
            >
                <Text>$ ./skills</Text>
                <Section1 />
                <Section2 />
            </VStack>
            <Button
                variant="outline"
                isFullWidth={false}
                borderColor={colors.fg}
                onClick={() => window.open(cv, "_blank")}
            >
                View CV
            </Button>
        </VStack>
    );
};

const Section1: React.FC = (): JSX.Element => {
    return makeSection("development", ["java", "python", "typescript", "nodejs", "reactjs", "spring", "graphql", "bash"]);
};

const Section2: React.FC = (): JSX.Element => {
    return makeSection("deployment, cloud & version control", ["aws", "docker", "git"]);
};

const Section3: React.FC = (): JSX.Element => {
    return makeSection("databases", ["mysql", "dynamodb", "mongodb"]);
};

const Section4: React.FC = (): JSX.Element => {
    return makeSection("problem solving", ["aoc", "kattis", "hackerrank", "leetcode"]);
};

const makeSection = (title: string, toolsList: string[]) => {
    return (
        <VStack
            align="center"
            spacing={4}
        >
            <Text align="center">{title}</Text>
            <Flex
                justify="center"
                direction="row"
                wrap="wrap"
                gap="10px"
            >
                {makeLinks(toolsList).map(({ src, alt, href, imageHeight }, i) => (
                    <ButtonLink
                        key={i.toString()}
                        src={src}
                        alt={alt}
                        href={href}
                        imageHeight={imageHeight}
                    />
                ))}
            </Flex>
        </VStack>
    );
};

const makeLinks = (toolsList: string[]) => {
    return Object.entries(tools)
        .filter(([k, _]) => toolsList.includes(k))
        .map((e) => e[1]);
};
