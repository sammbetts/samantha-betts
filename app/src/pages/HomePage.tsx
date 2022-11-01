import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { Modal } from "../components/Modal";
import { Contact } from "../components/Contact";
import { ThemeToggle } from "../theme/themeContext";

const useStyles = makeStyles(() => ({
  container: {
    flexDirection: "column",
    alignItems: "center",
    display: "flex",
    width: "850px",
  },
  header: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    fontWeight: "bold",
    color: "inherit",
    borderRadius: "1em",
    margin: "4px",
    padding: "4px",
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.1)'
    },
  },
  content: {
    display: "flex",
    justifyContent: "center",
  },
  title: {
    width: "70%",
    textAlign: "center",
  },
  emoji: {
    display: "flex",
    justifyContent: "center",
  },
}));

export const HomePage: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleModalOpen = () => {
    setOpen(true);
  };
  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.header}>
          <ThemeToggle />
          <Button
            className={classes.button}
            color="secondary"
            variant="contained"
            onClick={handleModalOpen}
          >
            CONTACT
          </Button>
        </Box>
        <Typography variant="h2" className={classes.title}>
          Samantha Betts
        </Typography>
        <Typography variant="subtitle1" className={classes.title}>
          Junior Software Engineer - Developer eXperience (DX)
        </Typography>
        <br></br>
        <Box className={classes.content}></Box>
      </Box>
      <Modal isOpen={open} handleClose={handleModalClose}>
        <Box>
          <Contact />
        </Box>
      </Modal>
    </>
  );
};
