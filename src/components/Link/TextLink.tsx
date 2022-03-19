import { Text } from "@chakra-ui/react";

interface TextLinkProps {
  text: string;
  href: string;
}

export const TextLink: React.FC<TextLinkProps> = ({
  text,
  href,
}): JSX.Element => {
  return (
    <Text as="a" href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </Text>
  );
};
