import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  a: {},
}));

const ModifiedA: React.FC<React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>> = (props) => {
  const classes = useStyles();
  return (
    <a
      {...props}
      className={classes.a}
      target="_blank"
      rel="noopener noreferrer"
    />
  );
};

export default ModifiedA;
