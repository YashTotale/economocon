//React Imports
import React from "react";
import Jumbotron from "../Components/Jumbotron";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import Welcome from "../Components/Welcome";

const useStyles = makeStyles((theme: Theme) => ({
  home: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    margin: "auto",
  },
  links: {},
}));

const HomePage: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Jumbotron />
      <div className={classes.home}>
        <div className={classes.info}>
          <div className={classes.links}></div>
          <Welcome />
        </div>
      </div>
    </>
  );
};

export default HomePage;
