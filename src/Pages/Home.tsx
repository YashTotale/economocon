//React Imports
import React from "react";
import Jumbotron from "../Components/Jumbotron";
import Welcome from "../Components/Sections/Welcome";
import Problems from "../Components/Sections/Problems";
import Solutions from "../Components/Sections/Solutions";
import NeedHelp from "../Components/Sections/NeedHelp";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  home: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "55%",
    margin: "20px auto",
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
        <NeedHelp />
      </div>
    </>
  );
};

export default HomePage;
