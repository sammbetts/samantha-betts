import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";

type Props = {
  blogData: any;
};

const useStyles = makeStyles(() => ({
  tileContainer: {
    margin: "10px",
    width: "300px",
    maxHeight: "310px",
    borderRadius: "10px",
    border: "1px solid",
    borderColor: "secondary",
    "&:hover": {
      boxShadow: "0px 10px 20px",
    },
  },
  image: {
    maxWidth: "100%",
    minWidth: "100%",
    height: "140px",
    objectFit: "cover",
    borderRadius: "9px",
  },
  contentContainer: {
    padding: "10px",
  },
  bodyTextContainer: {
    overflow: "hidden",
    height: "100px",
    display: "-webkit-box",
  },
}));

function toText(block: string) {
  let tag = document.createElement("div");
  tag.innerHTML = block;
  block = tag.innerText;
  return block;
}

function convertDate(date: string) {
  let dateArray = date?.slice(0, 10).split("-");
  let year = dateArray.shift();
  dateArray.push(year!);
  console.log(date);
  return dateArray.join("/");
}

export const BlogTile: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const { title, link, thumbnail, content, pubDate } = props.blogData;

  var truncatedContent = content.substring(0, 150).concat("...");
  var truncatedTitle = title.substring(0, 30).concat("...");

  return (
    <Box className={classes.tileContainer}>
      <Link target="_blank" rel="noopener noreferrer" href={`${link}`}>
        <img className={classes.image} src={`${thumbnail}`}></img>
      </Link>
      <Box className={classes.contentContainer}>
        <Link target="_blank" rel="noopener noreferrer" href={`${link}`}>
          <Typography variant="h6">{truncatedTitle}</Typography>
        </Link>
        <Typography variant="overline">{convertDate(pubDate)}</Typography>
        <Box className={classes.bodyTextContainer}>
          <Typography variant="body2">{toText(truncatedContent)}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
