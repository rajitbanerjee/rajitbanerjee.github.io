import { Button, Flex, Text, VStack } from "@chakra-ui/react";
import { ButtonLink, Card } from "components";
import { colors } from "config/colors";
import { backgroundImage, cv, SkillProps, skills } from "config/skills";

export const Skills: React.FC = (): JSX.Element => {
    return (
        <VStack
            // minWidth and minHeight cannot both be "full" (or similar). When one of them is absolute, the other can be relative.
            minWidth="full"
            minHeight="8xl"
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
    return makeSection(["typescript", "nodejs", "reactjs", "java", "spring", "graphql", "bash", "python"]);
};

const Section2: React.FC = (): JSX.Element => {
    return makeSection(["aws", "docker", "git", "mysql", "mongodb"]);
};

const makeSection = (toolsList: string[], title?: string) => {
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

const makeLinks = (toolsList: string[]): SkillProps[] => {
    return toolsList.map((t) => {
        if (!(t in skills)) {
            throw Error(`Skill "${t}" is not defined`);
        }
        return skills[t];
    });
};
