import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
  Menu,
  MenuItem,
  Button,
  CardActions,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import { postStyles } from "./style";
import {
  DeletePostById,
  GetPostDetailsById,
} from "../../../HttpServices/Posts";
import { Link, useParams } from "react-router-dom";
import DialogComponent from "../../Common/DialogComponent";
import { toast } from "react-toastify";

export default function SinglePostDetails(props) {
  const classes = postStyles();
  const [data, setData] = useState({});
  const { id } = useParams();

  //form menu purpose
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //dialog purpose
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    GetPostDetailsById({ id })
      .then(({ data: { data } }) => {
        setData(data);
        console.log("data", data);
      })
      .catch((e) => {
        console.log("error", e);
        if (e.response.status === 404) {
          props.history.push("/posts");
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const DialogContent = () => (
    <Grid container>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography
              variant='h6'
              color='primary'
              align='center'
              gutterBottom>
              Are You Sure Want to Delete ?
            </Typography>
            <Typography variant='h5' color='error' align='center' gutterBottom>
              {data.title}
            </Typography>
          </CardContent>
          <CardActions style={{ justifyContent: "center" }}>
            <Box mt={1} mb={1}>
              <Button
                variant='outlined'
                color='primary'
                style={{ marginRight: "8px" }}
                onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              <Button
                variant='outlined'
                color='secondary'
                onClick={() =>
                  DeletePostById({ id }).then(() => {
                    setDialogOpen(false);
                    toast.success("Post Deleted successfully");
                    props.history.push("/posts");
                  })
                }>
                Delete
              </Button>
            </Box>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );

  const formatDate = (str) => {
    let date = new Date();
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  };

  return (
    <Container>
      <DialogComponent
        openState={dialogOpen}
        handleDialogClose={() => setDialogOpen(false)}
        content={<DialogContent />}
      />
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem
          onClick={handleClose}
          color='primary'
          component={Link}
          to={`/posts/edit/${id}`}>
          <Button startIcon={<EditIcon />} color='primary'>
            Edit
          </Button>
        </MenuItem>
        <MenuItem color='secondary'>
          <Button
            startIcon={<DeleteForeverIcon />}
            color='secondary'
            onClick={() => {
              handleClose();
              setDialogOpen(true);
            }}>
            Delete
          </Button>
        </MenuItem>
      </Menu>
      <Grid container>
        {!Object.keys(data).length ? (
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
        ) : (
          <Grid item xs={12} sm={8}>
            <Card>
              <List>
                <ListItem>
                  <ListItemText>
                    <Typography variant='h6' color='textPrimary'>
                      {data.title}
                    </Typography>
                    <Typography
                  variant='body1'
                  component='h6'
                  color='textSecondary'>
                  {data.schoolname}
                </Typography>
                  </ListItemText>
                  <ListItemSecondaryAction>
                    <IconButton
                      aria-controls='simple-menu'
                      aria-haspopup='true'
                      onClick={handleClick}>
                      <MoreVertIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
              <img height="100px" width="100px"
                src={data.imageFileSet}
                alt={data.schoolname}
                className={classes.responsiveImg}
              />
              <CardContent>
                <div variant='body1'
                  component='h6'
                  color='textSecondary'>About:</div>
                <Typography
                  variant='body1'
                  component='h6'
                  color='textSecondary'>
                  {data.about}
                </Typography>
                <div variant='body1'
                  component='h6'
                  color='textSecondary'>Location:</div>
                <Typography
                  variant='body1'
                  component='h6'
                  color='textSecondary'>
                  {data.location}
                </Typography>
                <div variant='body1'
                  component='h6'
                  color='textSecondary'>Admission:</div>
                <Typography
                  variant='body1'
                  component='h6'
                  color='textSecondary'>
                  {data.admission}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
