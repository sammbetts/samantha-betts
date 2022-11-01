import { createTheme, responsiveFontSizes } from "@mui/material";
import typography from "./styles/typography";
import { colors } from "./styles/colors";

export const globalTheme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: colors.palette.primary,
      },
      secondary: {
        main: colors.palette.secondary,
      },
    },
    typography: typography,
    components: {
      MuiFormLabel: {
        styleOverrides: { root: { color: "inherit" } },
      },
    },
    breakpoints: {
      values: {
        xs: 500,
        sm: 750,
        md: 950,
        lg: 1250,
        xl: 1500,
      },
    },
  })
);

export const darkTheme = responsiveFontSizes(
  createTheme(globalTheme, {
    palette: {
      mode: "dark",
      text: {
        primary: "#fff",
        secondary: "#fff",
      },
      background: {
        default: colors.palette.dark,
        paper: colors.palette.paperDark,
      },
    },
  })
);

export const lightTheme = responsiveFontSizes(
  createTheme(globalTheme, {
    palette: {
      mode: "light",
      text: {
        primary: "#000000",
        secondary: "#000000",
      },
      background: {
        default: colors.palette.light,
        paper: colors.palette.paperLight,
      },
      contrastThreshold: 3,
    },
  })
);
