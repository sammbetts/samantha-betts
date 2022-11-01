import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

type Props = {
  blogData: any;
};

const useStyles = makeStyles(() => ({
  container: {
    margin: "15px",
    width: "320px",
  },
  image: {
    borderBottom: "2px solid black",
    width: "320px",
    height: "170px",
    objectFit: "cover",
    marginBottom: "3%",
  },
  text: {},
}));


export const BlogTile: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const { title, link, thumbnail, content, pubDate } = props.blogData;

  return (
    <Box className={classes.container}>
      <a target="_blank" rel="noopener noreferrer" href={`${link}`}>
      <Box>
        <img className={classes.image} src={`${thumbnail}`}></img>
      </Box>
      </a>
      <Box className={classes.container}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{pubDate}</Typography>
        <Typography variant="body2">{content}</Typography>
      </Box>
    </Box>
  );
};
