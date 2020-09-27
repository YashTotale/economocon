import React from "react";

//Material UI Imports
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  text: {
    margin: "10px 2px",
  },
}));

const Text: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Typography variant="h6" className={classes.text}>
      {children}
    </Typography>
  );
};

export default Text;
