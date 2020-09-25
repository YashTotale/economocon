//React Imports
import React from "react";

//Material UI Imports
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navbar: {
    justifyContent: "center",
    backgroundImage:
      "linear-gradient(135deg, rgb(68, 148, 252) 0%, rgb(15, 107, 245) 100%)",
  },
  heading: {
    textAlign: "center",
  },
}));

const NavBar: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar elevation={2} position="static">
      <Toolbar className={classes.navbar}>
        <Typography className={classes.heading} variant="h4">
          SDG Project
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
