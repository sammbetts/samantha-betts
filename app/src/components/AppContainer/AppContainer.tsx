import React, { ReactNode } from "react";
import { Container, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

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
    minWidth: "300px",
    maxWidth: "fit-content",
    display: "flex",
    justifyContent: "center",
    transition: "0.8s ease",
  },
}));

export const AppContainer: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.container}>
        <Paper className={classes.appContainer}>{props.children}</Paper>
      </Container>
    </>
  );
};
