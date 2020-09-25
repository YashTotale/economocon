import React from "react";

//Material UI Imports
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  jumbotron: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundImage:
      "linear-gradient(135deg, rgb(38, 132, 255) 0%, rgb(7, 71, 166) 100%)",
  },
  content: {
    width: "50%",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    color: "white",
    fontFamily: "cursive",
    fontWeight: 300,
    fontVariant: "small-caps",
    fontSize: "5rem",
  },
  description: {
    color: "white",
    fontFamily: "American Typewriter, serif",
  },
}));

const Jumbotron: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.jumbotron}>
      <div className={classes.content}>
        <Typography className={classes.heading} variant="h1">
          Econonomocon
        </Typography>
        <Typography className={classes.description} variant="h6">
          Here to help fledgling industries boom in a safe and sustainable way!
        </Typography>
      </div>
    </div>
  );
};

export default Jumbotron;
