import { extendTheme } from "@chakra-ui/react";

import { COLORS } from "./colors";

import { FONT_FAMILY } from "./font";

export const theme = extendTheme({
  colors: {
    green: {
      50: "#e4fce9",
      100: "#bff1c7",
      200: COLORS.GREEN,
      300: "#70dd82",
      400: "#4ad35f",
      500: "#31b945",
      600: "#259035",
      700: "#196725",
      800: "#0c3e14",
      900: "#001601",
    },
    white: {
      50: COLORS.WHITE,
      100: "#d9d9d9",
      200: "#bfbfbf",
      300: "#a6a6a6",
      400: "#8c8c8c",
      500: "#737373",
      600: "#595959",
      700: "#404040",
      800: "#262626",
      900: "#0d0d0d",
    },
    gray: {
      50: "#fbf0f24d",
      100: "#dcd8d94d",
      200: "#bfbfbf4d",
      300: "#a6a6a64d",
      400: "#8c8c8c4d",
      500: "#7373734d",
      600: "#5959594d",
      700: COLORS.GRAY,
      800: "#2826264d",
      900: "#150a0d4d",
    },
    glass: {
      50: "#fbf0f24d",
      100: "#dcd8d94d",
      200: COLORS.GLASS,
      300: "#a6a6a64d",
      400: "#8c8c8c4d",
      500: "#7373734d",
      600: "#5959594d",
      700: "#4040404d",
      800: "#2826264d",
      900: "#150a0d4d",
    },
    purple: {
      50: "#efeffa",
      100: "#cfd0e2",
      200: "#b0b1cd",
      300: "#9192b7",
      400: "#7173a3",
      500: "#585a8b",
      600: "#45466c",
      700: "#31324d",
      800: COLORS.PURPLE,
      900: "#090914",
    },
  },
  fonts: {
    body: FONT_FAMILY,
    heading: FONT_FAMILY,
    mono: FONT_FAMILY,
  },
  components: {
    // Input: {
    //   baseStyle:{borderColor: "green"},
    //   sizes: {
    //     md: {
    //       borderColor: "red" ,
    //       field: { borderRadius: 15, borderColor: "red" },
    //     },
    //   },
    //   defaultProps: {
    //     size: "md",
    //   },
    //   variants: {
    //     outline: {
    //       borderColor: "blue",
    //     },
    //   },
    // },
    Text: {
      sizes: {
        lg400: {
          fontSize: "1.125rem",
          fontWeight: 400,
          textAlign: "center",
        },
        "5xl300": {
          fontSize: { base: "1.5rem", sm: "3rem" },
          fontWeight: 300,
          textAlign: "center",
        },
        "5xl400": {
          fontSize: { base: "1.5rem", sm: "3rem" },
          fontWeight: 400,
          textAlign: "center",
        },
        "5xl600": {
          fontSize: { base: "1.5em", sm: "3rem" },
          fontWeight: 600,
          textAlign: "center",
        },
      },
      variants: {
        shadow: {
          filter: "drop-shadow(2px 4px 5px rgba(0, 0, 0, 0.4))",
        },
      },
    },
    Button: {
      baseStyle: {
        borderRadius: 15,
      },
      variants: {
        outline: {
          borderColor: "rgba(255, 255, 255, 0.6)",
          _hover: {
            bg: "rgba(255, 255, 255, 0.05)",
          },
          _active: {
            bg: "inherit",
          },
        },
      },
      defaultProps: {
        variant: "outline",
      },
    },
  },
});
