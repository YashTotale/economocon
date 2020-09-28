// React Imports
import React, {useState} from "react";
import Heading from "../Reusable/Heading";
import Text from "../Reusable/Text";
import Select from "react-select";
import Countries from "../../Data/Countries.json";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import {TextField, Button} from "@material-ui/core";
import {} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  needHelp: {
    width: "100%"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  input: {
    margin: "10px 0px"
  }
}));

interface NeedHelpProps {}

interface Inputs {
  country: string;
  problem: string;
  example: string;
  exampleRequired: string;
};

const NeedHelp: React.FC<NeedHelpProps> = ({}) => {
  const classes = useStyles();
  const [country, setCountry] = useState<string>("");
  const countries = Countries.map(c => ({label: c, value: c}));

  return (
    <div id="need-help" className={classes.needHelp}>
      <Heading>Need Help?</Heading>
      <Text>
        Fill out this form and I'll send one of my sidekicks to help you.
      </Text>
      <div className={classes.form}>
        <Select options={countries} menuPlacement="top" placeholder="Select your country"/>
        <TextField 
          className={classes.input} label="Describe your issue" variant="outlined" 
        />
        <Button variant="outlined" color="primary">Sumbit</Button>
      </div>
    </div>
  );
};

export default NeedHelp;
