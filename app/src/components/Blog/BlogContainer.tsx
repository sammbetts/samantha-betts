import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { BlogTile } from "./BlogTile";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignContent: "center",
    width: "fit-content",
  },
}));

export const BlogContainer: React.FC = () => {
  const classes = useStyles();

  const [myBlog, setMyBlog] = React.useState([]);
  const blogApi =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40samantha-louise1810";

  React.useEffect(() => {
    fetch(blogApi)
      .then((res) => res.json())
      .then((data) => {
        setMyBlog(data);
      });
  }, [blogApi]);

  function displayBlogs() {
    return (
      //@ts-ignore
      myBlog.items &&
      //@ts-ignore
      myBlog.items.map((blog: any) => {
        return (
          blog.categories.length > 0 && (
            <BlogTile key={blog.pubDate} blogData={blog} />
          )
        );
      })
    );
  }

  return <Box className={classes.container}>{displayBlogs()}</Box>;
};
