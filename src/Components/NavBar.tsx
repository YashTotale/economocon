//React Imports
import React from "react";

//Material UI Imports
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navbar: {
    justifyContent: "center",
  },
  heading: {
    textAlign: "center",
  },
}));

const NavBar: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar color="transparent" elevation={2} position="static">
      <Toolbar className={classes.navbar}>
        <Typography className={classes.heading} variant="h4">
          SDG Project
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
