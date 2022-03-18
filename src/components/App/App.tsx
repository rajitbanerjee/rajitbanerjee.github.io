import { VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Footer from "sections/Footer";
import Home from "sections/Home";
import Photography from "sections/Photography";
import Skills from "sections/Skills";

export const App: React.FC = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <VStack>
      <Home />
      <Skills />
      <Photography />
      <Footer />
    </VStack>
  );
};