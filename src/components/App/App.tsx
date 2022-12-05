import { VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Footer, Home, Photography, Skills } from "sections";
import { ErrorBoundary } from "./ErrorBoundary";

export const App: React.FC = (): JSX.Element => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <VStack>
            <ErrorBoundary>
                <Home />
                <Skills />
                <Photography />
                <Footer />
            </ErrorBoundary>
        </VStack>
    );
};
