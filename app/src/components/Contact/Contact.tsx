import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const useStyles = makeStyles(() => ({
  text: {
    fontSize: "18px",
    fontColor: "inherit",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const Contact: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <EmailIcon />
      <Typography className={classes.text}>
        samantha.louise@live.co.uk
      </Typography>
      <br></br>
      <TwitterIcon />
      <Typography className={classes.text}>
        <Link href="https://twitter.com/sammbettsy">{"@SammBettsy"}</Link>
      </Typography>
      <br></br>
      <LinkedInIcon />
      <Typography className={classes.text}>
        <Link href="https://www.linkedin.com/in/samantha-betts-5baa7964">
          {"LinkedIn"}
        </Link>
      </Typography>
    </Box>
  );
};
