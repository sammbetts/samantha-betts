import { createTheme, responsiveFontSizes } from '@mui/material';
import typography from './styles/typography';
import { colors } from './styles/colors';

export const globalTheme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: colors.palette.primary,
      },
    },
    typography: typography,
    components: {

      MuiFormLabel: {
        styleOverrides: { root: { color: 'inherit' } },
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
      mode: 'dark',
      primary: {
        main: colors.palette.primary,
      },
      secondary: {
        main: colors.palette.secondary,
        light: colors.palette.tertiary,
      },
      text: {
        primary: '#fff',
        secondary: '#fff',
      },
      background: {
        default: colors.palette.dark,
        paper: colors.palette.purple,
      },
    },
  })
);

export const lightTheme = responsiveFontSizes(
  createTheme(globalTheme, {
    palette: {
      mode: 'light',
      primary: {
        main: colors.palette.primary,
      },
      secondary: {
        main: colors.palette.tertiary,
        light: colors.palette.secondary,
      },
      text: {
        primary: '#000000',
        secondary: '#000000',
      },
      background: {
        default: colors.palette.light,
        paper: '#fff',
      },
      contrastThreshold: 3,
    },
  })
);
