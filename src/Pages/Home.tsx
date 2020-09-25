//React Imports
import React from "react";
import Select from "react-select";
import Jumbotron from "../Components/Jumbotron";

//Material UI Imports
import { makeStyles, Theme, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  home: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  configure: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: "40px",
    padding: "10px",
  },
  select: {
    width: "70%",
  },
}));

const HomePage: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <Jumbotron></Jumbotron>
      <Paper className={classes.configure}>
        <Typography variant="h4">Configure</Typography>
        <Select
          className={classes.select}
          options={[{ value: "hello", label: "hello" }]}
        ></Select>
      </Paper>
    </div>
  );
};

export default HomePage;
