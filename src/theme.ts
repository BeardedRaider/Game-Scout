import { extendTheme } from "@chakra-ui/react";
import type { ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed", // Primary color light mode (search and highlights)
      200: "#d3d3d3", // Genre label color
      300: "#b3b3b3", // secondary bg color in light mode
      400: "#a0a0a0",
      500: "#898989", //Icon color in DM and genre text in LM
      600: "#6c6c6c", // Card loading color
      700: "#202020", // primary card color dark mode
      800: "#121212", // Background color dark mode
      900: "#111111",
    },
  },
});

export default theme;