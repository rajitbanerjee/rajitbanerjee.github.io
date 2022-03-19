import { VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Footer, Home, Photography, Skills } from "sections";

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
