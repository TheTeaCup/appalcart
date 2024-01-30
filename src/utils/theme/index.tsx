import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
    config: {
        initialColorMode: "system",
        useSystemColorMode: true,
    },
    styles: {
        global: (props: Record<string, unknown>) => ({
            body: {
                bg: mode("#dde0e9", "#161922")(props),
                color: mode("#000b2e", "#d1dcff")(props),
            },
        }),
    }
});

export default theme;