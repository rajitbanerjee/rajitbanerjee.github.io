import { Button, Image } from "@chakra-ui/react";

interface ButtonLinkProps {
  src: string;
  href: string;
  alt: string;
  imageHeight?: string;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  src,
  href,
  alt,
  imageHeight,
}) => {
  if (!imageHeight) imageHeight = "40px";
  return (
    <Button
      variant="ghost"
      px={1}
      py={6}
      onClick={() => window.open(href, "_blank")}
    >
      <Image
        src={src}
        fallbackSrc="/images/logo.png"
        height={imageHeight}
        alt={alt}
      />
    </Button>
  );
};
