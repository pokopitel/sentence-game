import { extendTheme } from "@chakra-ui/react";

const FONT_FAMILY = "Kanit";

export const theme = extendTheme({
  colors: {
    green: {
      50: "#e4fce9",
      100: "#bff1c7",
      200: "#9FE8AB",
      300: "#70dd82",
      400: "#4ad35f",
      500: "#31b945",
      600: "#259035",
      700: "#196725",
      800: "#0c3e14",
      900: "#001601",
    },
    white: {
      50: "#E7E7E7",
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
      800: "#1d1e30",
      900: "#090914",
    },
  },
  fonts: {
    body: FONT_FAMILY,
    heading: FONT_FAMILY,
    mono: FONT_FAMILY,
  },
  components: {
    Input: {
      baseStyle: {
        field: {
          color: "white.50",
        },
      },
      variants: {
        outline: {
          field: {
            borderColor: "white.300",
            bg: "gray.700",
            borderRadius: 15,
            _focus: { borderColor: "green.100", boxShadow: "none" },
            _hover: { borderColor: "white.300" },
          },
        },
      },
    },
    Text: {
      sizes: {
        lg400: {
          fontSize: "1.125rem",
          fontWeight: 400,
          textAlign: "center",
        },
        "5xl300": {
          fontSize: ["1.5rem", "3rem"],
          fontWeight: 300,
          textAlign: "center",
        },
        "5xl400": {
          fontSize: ["1.5rem", "3rem"],
          fontWeight: 400,
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
          borderColor: "white.300",
          _hover: {
            bg: "gray.500",
          },
          _active: {
            bg: "inherit",
          },
          _focus: {
            boxShadow: "none",
          },
        },
      },
      defaultProps: {
        variant: "outline",
      },
    },
  },
});
