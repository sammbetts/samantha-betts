import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

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
}));

export const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.text}>
        This page was built with 💕 using React TypeScript
      </Typography>
    </Box>
  );
};
