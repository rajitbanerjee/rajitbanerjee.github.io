import { IconButton } from "@chakra-ui/react";

interface Props {
  alt: string;
  icon: JSX.Element;
  href: string;
}

const IconLink: React.FC<Props> = ({ alt, icon, href }) => {
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
