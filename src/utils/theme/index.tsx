import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  styles: {
    global: (props: Record<string, unknown>) => ({
      body: {
        bg: mode("#dde0e9", "#161922")(props),
      },
    }),
  },
});

export default theme;
