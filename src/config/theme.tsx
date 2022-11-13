import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";

const fontFamily = "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace";

export const theme = extendTheme({
    fonts: {
        heading: fontFamily,
        body: fontFamily,
    },
    styles: {
        global: {
            body: {
                margin: 0,
                backgroundColor: colors.bg,
                color: colors.fg,
            },

            a: {
                _hover: {
                    color: colors.accent,
                    fontWeight: "bold",
                },
            },
        },
    },
});
