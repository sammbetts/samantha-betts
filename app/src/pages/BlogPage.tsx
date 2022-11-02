import React from "react";
import { Typography, Box, Button, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { BlogContainer } from "../components/Blog";

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

export const BlogPage: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.container}>
        <Typography variant="h2" className={classes.title}>
          Blog
        </Typography>
        <Typography variant="subtitle1" className={classes.title}>
          <Link href="https://medium.com/@samantha-louise1810">View all in Medium</Link>
        </Typography>
        <br></br>
        <Box className={classes.content}>
          <BlogContainer />
        </Box>
      </Box>

    </>
  );
};
