import React from 'react';
import { ThemeContext, ModeContext } from './ThemeContextProvider';
import { Box } from '@mui/material';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { colors } from '../styles/colors';

export const ThemeToggle: React.FC = () => {
  const mode = React.useContext(ModeContext);
  const setMode = React.useContext(ThemeContext);

  const toggleTheme = (checked: boolean) => {
    if (setMode) {
      setMode(checked);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', margin: '0.4rem' }}>
      <DarkModeSwitch
        checked={mode}
        onChange={toggleTheme}
        size={30}
        sunColor={colors.palette.light}
        moonColor={colors.palette.dark}
      />
    </Box>
  );
};
