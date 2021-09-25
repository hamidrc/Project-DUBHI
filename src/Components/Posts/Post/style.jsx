import { makeStyles } from "@material-ui/core";

export const postStyles = makeStyles((theme) => ({
  responsiveImg: {
    width: "20%",
    height: "auto",
  },
  responsiveEditImg: {
    paddingTop: "8%",
    width: "80%",
    height: "auto",
  },
  cardImageContainer: {
    width: "100%",
    height: "auto",
    maxHeight: "480px",
    overflowY: "hidden",
  },
  Link: {
    textDecoration: "none",
  },
}));
