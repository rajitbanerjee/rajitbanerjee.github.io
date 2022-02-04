import { Image } from "@chakra-ui/react";

interface Props {
  src: string;
  href: string;
  alt: string;
}

const LogoLink: React.FC<Props> = ({ src, href, alt }) => {
  return (
    <Image
      src={src}
      fallbackSrc="/images/logo.png"
      height="50px"
      alt={alt}
      onClick={() => window.open(href, "_blank")}
    />
  );
};

export default LogoLink;
