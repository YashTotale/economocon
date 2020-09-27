// React Imports
import React from "react";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import {} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: "bold",
  },
}));

interface HeadingProps {}

const Heading: React.FC<HeadingProps> = ({ children }) => {
  const classes = useStyles();
  return (
    <Typography className={classes.heading} variant="h4">
      {children}
    </Typography>
  );
};

export default Heading;
