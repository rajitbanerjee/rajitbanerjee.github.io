import { Box } from "@chakra-ui/react";
import colors from "custom/colors";
import React from "react";

interface CardProps {
  contents: JSX.Element;
}

export const Card: React.FC<CardProps> = ({ contents }): JSX.Element => {
  return (
    <Box
      borderColor={colors.bg}
      borderRadius="5px"
      boxShadow="md"
      padding="1em"
      backgroundColor={colors.bg}
      margin={10}
    >
      {contents}
    </Box>
  );
};
