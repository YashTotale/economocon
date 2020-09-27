// React Imports
import React from "react";
import Text from "../Reusable/Text";
import Heading from "../Reusable/Heading";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import {} from "@material-ui/core";
import {} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: "bold",
  },
}));

interface SolutionsProps {}

const Solutions: React.FC<SolutionsProps> = ({}) => {
  const classes = useStyles();
  return (
    <div>
      <Heading>Solutions</Heading>
      <Text>
        The <strong>Internet</strong>, in many ways, is like a superhero: it
        gives people access to a{" "}
        <em>vast array of information and knowledge</em>; it connects people and
        places far away; it provides solutions to both economic and
        environmental challenges by promoting progress in a resource-efficient
        way
      </Text>
    </div>
  );
};

export default Solutions;
