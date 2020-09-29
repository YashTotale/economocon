// React Imports
import React, { useState } from "react";
import Heading from "../Reusable/Heading";
import Text from "../Reusable/Text";
import Select from "react-select";
import Countries from "../../Data/Countries.json";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  Modal,
  Paper,
  Typography,
  Fade,
} from "@material-ui/core";
import {} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  needHelp: {
    width: "100%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formField: {
    margin: "10px 0px",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalPaper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    "&:focus": {
      outline: "none",
    },
  },
}));

interface NeedHelpProps {}

const NeedHelp: React.FC<NeedHelpProps> = ({}) => {
  const classes = useStyles();
  const [country, setCountry] = useState<string>();
  const [open, setOpen] = useState<boolean>(false);
  const [sidekick, setSidekick] = useState<string>();
  const [issue, setIssue] = useState<string>("");
  const countries = Countries.map((c) => ({ label: c, value: c }));

  return (
    <>
      <div id="need-help" className={classes.needHelp}>
        <Heading>Need Help?</Heading>
        <Text>
          Fill out this form and I'll send one of my sidekicks to help you.
        </Text>
        <div className={classes.form}>
          <Select
            className={classes.formField}
            value={country ? { label: country, value: country } : undefined}
            // @ts-ignore
            onChange={(ob) => setCountry(ob.value)}
            options={countries}
            menuPlacement="top"
            placeholder="Select your country..."
          />
          <Select
            className={classes.formField}
            value={sidekick ? { label: sidekick, value: sidekick } : undefined}
            //@ts-ignore
            onChange={(ob) => setSidekick(ob.value)}
            options={[
              { value: "Fund Friend", label: "Fund Friend" },
              { value: "Unleash", label: "Unleash" },
            ]}
            menuPlacement="top"
            placeholder="Select your sidekick..."
          />
          <TextField
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            className={classes.formField}
            label="Describe your issue"
            variant="outlined"
          />
          <Button
            className={classes.formField}
            onClick={() => setOpen(true)}
            variant="outlined"
            color="primary"
          >
            Submit
          </Button>
        </div>
      </div>
      <Modal
        disableAutoFocus
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Fade in={open}>
          <Paper className={classes.modalPaper}>
            <Typography variant="h4">
              Your issue has been received. I am dispatching{" "}
              {sidekick ?? "Fund Friend"} to {country ?? "your location"}.
            </Typography>
            <Typography variant="h6">Your issue was: "{issue}"</Typography>
          </Paper>
        </Fade>
      </Modal>
    </>
  );
};

export default NeedHelp;
