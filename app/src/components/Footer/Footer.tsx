import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { Modal } from "../../components/Modal";
import { Contact } from "../../components/Contact";

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
  button: {
    fontWeight: "bold",
    color: "inherit",
    borderRadius: "1em",
    margin: "6px",
    padding: "4px",
    "&:hover": {
      background: "rgba(255, 255, 255, 0.1)",
    },
  },
}));

export const Footer: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleModalOpen = () => {
    setOpen(true);
  };
  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <Box className={classes.container}>
      <Button
        className={classes.button}
        color="secondary"
        variant="contained"
        onClick={handleModalOpen}
      >
        CONTACT
      </Button>
      <Typography className={classes.text}>
        This page was built with 💕 using React TypeScript
      </Typography>
      <Modal isOpen={open} handleClose={handleModalClose}>
        <Box>
          <Contact />
        </Box>
      </Modal>
    </Box>
  );
};
