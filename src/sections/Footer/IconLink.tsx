import { IconButton } from "@chakra-ui/react";

interface IconLinkProps {
  alt: string;
  icon: JSX.Element;
  href: string;
}

const IconLink: React.FC<IconLinkProps> = ({ alt, icon, href }) => {
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

export default IconLink;
