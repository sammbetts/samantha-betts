import React, { PropsWithChildren } from "react";
import { Box, Dialog, DialogContent, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  openDialog: {
    padding: "20px",
    marginLeft: "20px",
    display: "flex",
    alignItems: "center",
  },
  container: {
    display: "flex",
    alignItems: "flex-start",
  },
}));
interface Props {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<Props> = (props: PropsWithChildren<Props>) => {
  const { children, isOpen, handleClose } = props;
  const classes = useStyles(props);

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <Box className={classes.container}>
        <DialogContent className={classes.openDialog}>{children}</DialogContent>
        <IconButton onClick={handleClose}>
          <ClearIcon color="secondary" />
        </IconButton>
      </Box>
    </Dialog>
  );
};
