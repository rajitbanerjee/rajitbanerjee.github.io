import { IconButton } from "@chakra-ui/react";

interface FooterLinkProps {
    alt: string;
    icon: JSX.Element;
    href: string;
}

export const FooterLink: React.FC<FooterLinkProps> = ({ alt, icon, href }) => {
    return (
        <IconButton
            variant="ghost"
            aria-label={alt}
            icon={icon}
            size="lg"
            isRound
            onClick={() => window.open(href, "_blank")}
        ></IconButton>
    );
};
