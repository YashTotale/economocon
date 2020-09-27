import React from "react";
import Text from "../Reusable/Text";
import Heading from "../Reusable/Heading";

//Material UI Imports
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  welcome: {
    width: "100%",
  },
  heading: {
    fontWeight: "bold",
  },
}));

const Welcome: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.welcome}>
      <Heading>Welcome</Heading>
      <Text>
        Hi, I'm <strong>Economocon</strong>. I'm not your regular superhero,
        instead, I'm a website designed to send help to places that are trying
        to innovate and industrialize.
      </Text>
    </div>
  );
};

export default Welcome;
