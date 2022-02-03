import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";

const fontFamily =
  "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace";

const theme = extendTheme({
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
        minH: "100vh",
        textAlign: "center",
      },

      a: {
        textDecoation: null,
        _hover: {
          color: colors.accent,
          fontWeight: "bold",
        },
      },
    },
  },
});

export default theme;
