import React from "react";

//Material UI Imports
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  text: {
    margin: "10px 2px",
  },
}));

interface TextProps {
  className?: string;
}

const Text: React.FC<TextProps> = ({ children, className }) => {
  const classes = useStyles();

  return (
    <Typography variant="h6" className={`${classes.text} ${className}`}>
      {children}
    </Typography>
  );
};

export default Text;
