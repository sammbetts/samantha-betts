import React from "react";
import { Typography, Box, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    flexDirection: "column",
    alignItems: "center",
    display: "flex",
  },
  content: {
    display: "flex",
    justifyContent: "center",
  },
  title: {
    width: "70%",
    textAlign: "center",
  },
}));

export const HomePage: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography variant="h2" className={classes.title}>
        Samantha Betts
      </Typography>
      <Typography variant="subtitle1" className={classes.title}>
        Junior Software Engineer - Developer eXperience (DX)
      </Typography>
      <br></br>
      <Box className={classes.content}>
        <Typography variant="body1">
          <Link href="/blog">Blog</Link>
        </Typography>
      </Box>
    </Box>
  );
};
