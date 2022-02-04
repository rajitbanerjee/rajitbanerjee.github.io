import { Text } from "@chakra-ui/react";
import React from "react";

interface ExternalURLProps {
  text: string;
  href: string;
}

export const ExternalURL: React.FC<ExternalURLProps> = ({
  text,
  href,
}): JSX.Element => {
  return (
    <Text as="a" href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </Text>
  );
};
