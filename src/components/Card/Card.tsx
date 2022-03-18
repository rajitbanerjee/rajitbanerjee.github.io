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
      borderRadius="25px"
      backgroundColor={colors.bg}
      margin="5rem"
    >
      {contents}
    </Box>
  );
};