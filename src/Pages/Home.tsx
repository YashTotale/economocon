//React Imports
import React from "react";
import Jumbotron from "../Components/Jumbotron";
import Welcome from "../Components/Welcome";
import Problems from "../Components/Problems";
import Solutions from "../Components/Solutions";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  home: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    margin: "10px auto 0px",
  },
}));

const HomePage: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Jumbotron />
      <div className={classes.home}>
        <Welcome />
        <Problems />
        <Solutions />
      </div>
    </>
  );
};

export default HomePage;
