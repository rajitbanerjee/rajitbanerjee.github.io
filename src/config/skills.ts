export const backgroundImage = "/images/background.jpg";
export const cv = "https://rajitbanerjee.com/cv/rajit_banerjee_cv.pdf";

export interface SkillProps {
    src: string;
    alt: string;
    href: string;
    imageHeight?: string;
}

export const skills: { [key: string]: SkillProps } = {
    java: {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg",
        alt: "Java",
        href: "https://www.oracle.com/ie/java/",
    },
    python: {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-plain-wordmark.svg",
        alt: "Python",
        href: "https://www.python.org/",
    },
    typescript: {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        alt: "TypeScript",
        href: "https://www.typescriptlang.org",
    },
    nodejs: {
        src: "/images/tools/node.png",
        alt: "NodeJS",
        href: "https://nodejs.org/en/",
        imageHeight: "25px",
    },
    reactjs: {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        alt: "ReactJS",
        href: "https://reactjs.org",
    },
    spring: {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original-wordmark.svg",
        alt: "Spring",
        href: "https://spring.io/projects/spring-boot",
    },
    graphql: {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain-wordmark.svg",
        alt: "GraphQL",
        href: "https://graphql.org",
    },
    bash: {
        src: "/images/tools/bash.png",
        alt: "Bash",
        href: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)",
    },
    aws: {
        src: "/images/tools/aws.png",
        alt: "AWS",
        href: "https://aws.amazon.com/",
        imageHeight: "25px",
    },
    docker: {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-plain-wordmark.svg",
        alt: "Docker",
        href: "https://www.docker.com/",
    },
    git: {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-plain.svg",
        alt: "Git",
        href: "https://git-scm.com/",
        imageHeight: "20px",
    },
    mysql: {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
        alt: "MySQL",
        href: "https://www.mysql.com/",
    },
    mongodb: {
        src: "/images/tools/mongo.png",
        alt: "MongoDB",
        href: "https://www.mongodb.com/",
        imageHeight: "20px",
    },
    // aoc: {
    //     src: "/images/tools/aoc.jpg",
    //     alt: "Advent of Code",
    //     href: "https://github.com/rajitbanerjee/advent-of-code",
    // },
    // kattis: {
    //     src: "/images/tools/kattis.png",
    //     alt: "Kattis",
    //     href: "https://github.com/rajitbanerjee/kattis",
    // },
    // hackerrank: {
    //     src: "/images/tools/hackerrank.png",
    //     alt: "HackerRank",
    //     href: "https://www.hackerrank.com/rajit_banerjee",
    // },
    // leetcode: {
    //     src: "/images/tools/leetcode.png",
    //     alt: "LeetCode",
    //     href: "https://github.com/rajitbanerjee/leetcode",
    // },
};
