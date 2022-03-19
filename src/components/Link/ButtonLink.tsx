import { Image } from "@chakra-ui/react";

interface Props {
  src: string;
  href: string;
  alt: string;
}

export const ButtonLink: React.FC<Props> = ({ src, href, alt }) => {
  return (
    <Image
      src={src}
      fallbackSrc="/images/logo.png"
      height="40px"
      alt={alt}
      onClick={() => window.open(href, "_blank")}
    />
  );
};
