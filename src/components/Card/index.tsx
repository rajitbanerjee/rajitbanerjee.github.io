import { Box, Text } from "@chakra-ui/react";
import colors from "custom/colors";
import React from "react";

const Card: React.FC = () => {
  return (
    <Box
      borderWidth="1px"
      borderColor={colors.bg}
      borderRadius="5px"
      boxShadow="md"
      padding="1em"
      backgroundColor={colors.bg}
      margin={10}
    >
      {<Text>Hello</Text>}
    </Box>
  );
};

export default Card;
