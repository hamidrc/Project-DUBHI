import { Box, Card, CardContent, Grow, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { postStyles } from "./style";

export default function SinglePost({ item }) {
  const classes = postStyles();
  return (
    <Grow in>
      <Card>
{/*         <Box className={classes.cardImageContainer}>
          <img
            alt={item.schoolname}
          />
        </Box> */}
        <CardContent>
          <Link to={`/posts/${item._id}`} className={classes.Link}>
            <Typography variant='body1' component='h6' color='textPrimary'>
              {item.schoolname}
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </Grow>
  );
}
