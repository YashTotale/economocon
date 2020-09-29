import React from "react";
import Text from "../Reusable/Text";
import Heading from "../Reusable/Heading";
import Item from "../Reusable/Item";

//Material UI Imports
import { makeStyles, List } from "@material-ui/core";
import {} from "@material-ui/icons";

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
        instead, I'm a website designed to send help to places in an effort to
        boost their economies and help them innovate and industrialize.
      </Text>
      <Text>
        Goals 8 and 9 are focused on economic growth and factors that influence
        it such as labor, infrastructure, and innovation. The objective is that,
        over the next decade, the world will have achieved:
      </Text>
      <List>
        <Item avatar="https://i.ibb.co/hmBDHZM/image.png">
          Productive work for everyone, with equal pay and equal value
        </Item>
        <Item avatar="https://i.ibb.co/X89cFvR/image.png">
          Eradication of child labor in all its forms
        </Item>
        <Item avatar="https://i.ibb.co/tLHwQck/image.png">
          Increased resource efficiency and use of clean and
          environmentally-friendly energy and technologies
        </Item>
        <Item avatar="https://i.ibb.co/pnhDK2h/image.png">
          Development of widespread resilient infrastructure that is affordable
          and accessible to all
        </Item>
      </List>
    </div>
  );
};

export default Welcome;
