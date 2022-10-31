import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { Modal } from "../components/Modal";
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
          <Button onClick={handleModalOpen}>OPEN MODAL</Button>
        </Box>
        <Typography variant="h2" className={classes.title}>
          Samantha Betts
        </Typography>
        <br></br>
        <Box className={classes.content}></Box>
      </Box>
      <Modal isOpen={open} handleClose={handleModalClose}>
        <Box>Hello!</Box>
      </Modal>
    </>
  );
};
