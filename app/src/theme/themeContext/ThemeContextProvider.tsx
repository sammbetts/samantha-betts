import React, { Dispatch, SetStateAction } from 'react';
import { ThemeProvider, useMediaQuery } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from '../theme';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { StyledEngineProvider } from '@mui/material/styles';

type Props = {
  children: React.ReactNode;
};

const DARK_SCHEME_QUERY = '(prefers-color-scheme: light)';
type ThemeMode = 'light' | 'dark';

export const ThemeContext = React.createContext<Dispatch<
  SetStateAction<boolean>
> | null>(null);
export const ModeContext = React.createContext<boolean>(true);

export const ThemeContextProvider: React.FC<Props> = (props: Props) => {
  const isDark = useMediaQuery(DARK_SCHEME_QUERY);
  const [themeMode, setThemeMode] = useLocalStorage<ThemeMode>(
    'themeMode',
    isDark ? 'light' : 'dark'
  );

  const toggleTheme = () => {
    switch (themeMode) {
      case 'light':
        setThemeMode('dark');
        break;
      case 'dark':
        setThemeMode('light');
        break;
      default:
    }
  };
  return (
    <StyledEngineProvider injectFirst>
      <ThemeContext.Provider value={toggleTheme}>
        <ModeContext.Provider value={themeMode === 'dark'}>
          <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
            <CssBaseline />
            {props.children}
          </ThemeProvider>
        </ModeContext.Provider>
      </ThemeContext.Provider>
    </StyledEngineProvider>
  );
};
