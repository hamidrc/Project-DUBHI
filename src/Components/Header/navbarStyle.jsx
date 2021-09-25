import { makeStyles } from "@material-ui/core";

export const NavbarStyle = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
  },
  logoContainer: {
    display: "flex",
    flexFlow: "row wrap",
  },
  logo: {
    width: "200px",
    height: "auto",
  },
  link: {
    textDecoration: "none",
  },
  title: {
    marginLeft: theme.spacing(1),
    lineHeight: "48px",
    color: "white",
    textDecoration: "none",
  },
}));
