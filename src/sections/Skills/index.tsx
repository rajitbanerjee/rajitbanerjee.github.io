import { VStack } from "@chakra-ui/react";
import Card from "components/Card";
import React from "react";
import Contents from "./Contents";

const Skills: React.FC = (): JSX.Element => {
  return (
    <VStack
      w="100%"
      h="100%"
      backgroundImage={`url(/images/spotlight.jpg)`}
      backgroundSize="100%"
      backgroundRepeat="no-repeat"
      justifyContent="center"
      height="60rem"
    >
      <Card contents={<Contents />} />
    </VStack>
  );
};

export default Skills;
