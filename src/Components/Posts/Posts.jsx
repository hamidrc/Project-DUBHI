import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Container, Grid } from "@material-ui/core";
import SinglePost from "./Post/SinglePost";
import { GetAllPosts } from "../../HttpServices/Posts";

export default function Posts() {
  const [postData, setPostData] = useState([]);

  const GetAllPostsByREquest = () =>
    GetAllPosts()
      .then(({ data: { data } }) => {
        console.log("data", data);
        setPostData(data);
      })
      .catch((e) => console.log("error", e.message));

  useEffect(() => {
    GetAllPostsByREquest();
  }, []);

  return (
    <Container>
      <Grid container spacing={1}>
        {postData.length ? (
          postData.map((item, i) => (
            <Grid item xs={12} sm={4} key={i}>
              <SinglePost item={item} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Box
              p={5}
              mt={5}
              display='flex'
              justifyContent='center'
              alignItems='center'>
              <CircularProgress />
            </Box>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
