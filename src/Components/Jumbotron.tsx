import React from "react";

//Material UI Imports
import { makeStyles, Typography } from "@material-ui/core";
import ModifiedA from "./Reusable/ModifiedA";

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
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
    padding: "20px 0px",
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
  goalImg: {
    width: 150,
    height: 150,
    margin: "0px 70px",
  },
}));

const Jumbotron: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.jumbotron}>
      <ModifiedA href="https://www.un.org/sustainabledevelopment/economic-growth/">
        <img
          className={classes.goalImg}
          src="https://i.ibb.co/r42L7Xw/image.png"
        ></img>
      </ModifiedA>
      <div className={classes.content}>
        <Typography className={classes.heading} variant="h1">
          Econonomocon
        </Typography>
        <Typography className={classes.description} variant="h6">
          Here to help fledgling industries boom in a safe and sustainable way!
        </Typography>
      </div>
      <ModifiedA href="https://www.un.org/sustainabledevelopment/infrastructure-industrialization/">
        <img
          className={classes.goalImg}
          src="https://i.ibb.co/FznJ6S6/E-SDG-goals-icons-individual-rgb-09.png"
        ></img>
      </ModifiedA>
    </div>
  );
};

export default Jumbotron;
