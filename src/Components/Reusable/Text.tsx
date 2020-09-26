import React from "react";

//Material UI Imports
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  text: {},
}));

const Text: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Typography variant="body1" className={classes.text}>
      {children}
    </Typography>
  );
};

export default Text;
