import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Container, Paper, Box, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import HomeIcon from "@mui/icons-material/Home";

import { ThemeToggle } from "../../theme/themeContext";

type Props = {
  children: ReactNode;
};

const useStyles = makeStyles(() => ({
  container: {
    position: "relative",
    marginTop: "2rem",
    marginBottom: "2rem",
    display: "flex",
    justifyContent: "center",
  },
  appContainer: {
    boxShadow:
      "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 10px 0px;",
    borderRadius: "0.5em",
    padding: "1rem",
    margin: "0px",
    width: "100%",
    minWidth: "380px",
    maxWidth: "1000px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    transition: "0.8s ease",
  },
  header: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  homeIconButton: {
    width: "46px",
    height: "46px",
    color: "inherit",
    "&:hover": {
      backgroundColor: "rgba(0,0,0, 0.1)",
    },
  },
  homeIcon: {
    fontSize: "33px",
    "&:hover": {
      color: "secondary",
    },
  },
  link: {
    color: "inherit",
  }
}));

export const AppContainer: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.container}>
        <Paper className={classes.appContainer}>
          <Box className={classes.header}>
            <ThemeToggle />
            <Link className={classes.link} to="/" >
              <IconButton className={classes.homeIconButton}>
                <HomeIcon className={classes.homeIcon} />
              </IconButton>
            </Link>
          </Box>
          {props.children}
        </Paper>
      </Container>
    </>
  );
};
