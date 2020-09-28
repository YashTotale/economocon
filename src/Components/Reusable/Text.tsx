import React from "react";

//Material UI Imports
import { makeStyles, Typography, TypographyVariant } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  text: {
    margin: "10px 2px",
  },
}));

interface TextProps {
  className?: string;
  variant?: TypographyVariant;
}

const Text: React.FC<TextProps> = ({ children, className, variant = "h6" }) => {
  const classes = useStyles();

  return (
    <Typography variant={variant} className={`${classes.text} ${className}`}>
      {children}
    </Typography>
  );
};

export default Text;
