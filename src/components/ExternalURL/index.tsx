import { Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  text: string;
  href: string;
}

const ExternalURL: React.FC<Props> = ({ text, href }): JSX.Element => {
  return (
    <Text as="a" href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </Text>
  );
};

export default ExternalURL;
