import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { menuTheme } from "@/utils/theme/menu.tsx";

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: "system",
  },
  styles: {
    global: (props: Record<string, unknown>) => ({
      body: {
        bg: mode("#dde0e9", "#161922")(props),
      },
    }),
  },
  components: { Menu: menuTheme },
});

export default theme;
