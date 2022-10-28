import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { Health } from "../Health";
import { useGetHealth } from "../../api";
import { ThemeToggle } from "../../theme/themeContext";

const useStyles = makeStyles(() => ({
  text: {
    fontSize: "13px",
    fontColor: "inherit",
  },
  container: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1rem",
    marginTop: "10rem",
  },
  status: {
    display: "flex",
    minWidth: "65px",
    justifyContent: "space-between",
  },
}));

export const Footer: React.FC = () => {
  const classes = useStyles();
  const getHealth = useGetHealth();

  const [health, setHealth] = React.useState<boolean>(false);

  React.useEffect(() => {
    getHealth.then(({ healthy }) => setHealth(healthy));
  }, []);

  return (
    <Box className={classes.container}>
      <ThemeToggle />
      <Typography className={classes.text}>
        This page was built with 💕 using React TypeScript
      </Typography>
      <Box className={classes.status}>
        <Typography className={classes.text}>Status:</Typography>
        <Health isHealthy={health} />
      </Box>
    </Box>
  );
};
