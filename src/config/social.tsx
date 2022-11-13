import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";

export const socialLinks = [
    {
        alt: "LinkedIn",
        icon: {
            home: <FaLinkedinIn />,
            footer: <FaLinkedin />,
        },
        href: "https://www.linkedin.com/in/rajitbanerjee",
    },
    {
        alt: "GitHub",
        icon: {
            home: <FaGithub />,
            footer: <FaGithub />,
        },
        href: "https://github.com/rajitbanerjee",
    },
    {
        alt: "Email",
        icon: {
            home: <AiOutlineMail />,
            footer: <AiOutlineMail />,
        },
        href: "mailto:rajitbanerjee15@gmail.com",
    },
];
