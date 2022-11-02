import React from "react";
import { Box, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { ThemeContext, ModeContext } from "./ThemeContextProvider";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { colors } from "../styles/colors";

const useStyles = makeStyles(() => ({
  iconButton: {
    display: "flex",
    justifyContent: "center",
    margin: "0.4rem",
    borderRadius: "50%",
    "&:hover": {
      backgroundColor: "rgba(0,0,0, 0.1)",
    },
  },
}));

export const ThemeToggle: React.FC = () => {
  const classes = useStyles();

  const mode = React.useContext(ModeContext);
  const setMode = React.useContext(ThemeContext);

  const toggleTheme = (checked: boolean) => {
    if (setMode) {
      setMode(checked);
    }
  };

  return (
    <IconButton className={classes.iconButton}>
      <DarkModeSwitch
        checked={mode}
        onChange={toggleTheme}
        size={30}
        sunColor={colors.palette.dark}
        moonColor={colors.palette.light}
      />
    </IconButton>
  );
};
