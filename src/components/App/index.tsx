import { VStack } from "@chakra-ui/react";
import React from "react";
import Footer from "sections/Footer";
import Home from "sections/Home";
import Photography from "sections/Photography";
import Skills from "sections/Skills";

const App: React.FC = (): JSX.Element => {
  return (
    <VStack>
      <Home />
      <Skills />
      <Photography />
      <Footer />
    </VStack>
  );
};

export default App;
