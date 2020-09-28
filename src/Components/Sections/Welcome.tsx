import React, {useState} from "react";
import Text from "../Reusable/Text";
import Heading from "../Reusable/Heading";
import Sidekick from "../Sidekick";

//Material UI Imports
import { makeStyles, Button } from "@material-ui/core";
import { Description } from "@material-ui/icons";

interface StyleProps {
  hoveringImage1: boolean;
  hoveringImage2: boolean;
}

const useStyles = makeStyles((theme) => ({
  welcome: {
    width: "100%",
    marginBottom:"40px"
  },
  heading: {
    fontWeight: "bold",
   
  },
  heroes:{
    display : "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "3%",
    marginTop:"50px",
    marginBottom:"40px",
    
  },
}));

const Welcome: React.FC = () => {


  const classes = useStyles();

  return (
    <div className={classes.welcome}>
      <Heading >Welcome</Heading>
      <Text>
        Hi, I'm <strong>Economocon</strong>. I'm not your regular superhero,
        instead, I'm a website designed to send help to places that are trying
        to innovate and industrialize.
      </Text>
      <Text>
        My sidekicks, Money Man and ... help me achieve these goals.
      </Text>
      <div className = {classes.heroes}>
          <Sidekick 
            name="Money Man" 
            image="https://lh3.googleusercontent.com/-4xCdCPn5T04/X3Ec-AJNN9I/AAAAAAAAAHY/7wkPnUPqfBQeIr6IYfINZhKv58j1AVJtgCK8BGAsYHg/s0/2020-09-27.png"
            description="Money Man's presence provides inspiration to workers. This allows them to work faster 
            and boost the economy. His blue eyes can give insight about a countries economy. The green and yellow represents paper money and gold.
            Finally, The 8 on his arms represents the SDG that he fights for." 
          />
          
          <Sidekick 
            name="MoneyMan" 
            image="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            description="Hello"
          /> 
        </div>
      </div>
  );
};

export default Welcome;
