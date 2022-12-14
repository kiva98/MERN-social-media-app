import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";

import { Grid, CircularProgress } from "@material-ui/core";

// we have to fetch the data from the global redux store
import { useSelector } from "react-redux";

const Posts = ({ setCurrentId }) => {
  // we get access to the whole global redux store/state
  // posts because it is like that in reducers/index.js
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();

  if (!posts.length && !isLoading) return "No Posts";

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
