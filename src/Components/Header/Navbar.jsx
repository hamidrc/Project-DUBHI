import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import { NavbarStyle } from "./navbarStyle";
import image from "../../images/logo192.png";
import PostAddIcon from "@material-ui/icons/PostAdd";
import { Link } from "react-router-dom";

export default function Navbar() {
  const classes = NavbarStyle();
  return (
    <AppBar position='fixed'>
      <Toolbar className={classes.toolbar}>
        <Link to='/' className={classes.link}>
          <Box className={classes.logoContainer}>
            <img src={image} alt='react blog' className={classes.logo} />
          </Box>
        </Link>
        <Button
          component={Link}
          to='/posts/add'
          variant='contained'
          color='secondary'
          startIcon={<PostAddIcon />}
          className={classes.button}>
          Create
        </Button>
      </Toolbar>
    </AppBar>
  );
}
