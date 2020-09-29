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
  Box,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
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
    maxWidth: "80%",
    "&:focus": {
      outline: "none",
    },
  },
  modalTitle: {
    marginBottom: 5,
  },
  modalIssue: {
    marginBottom: 20,
  },
  modalText: {
    margin: "5px 0px",
  },
  modalRating: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  modalRatingInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  modalRatingLabel: {
    position: "absolute",
    minWidth: 80,
    left: 150,
  },
}));

interface NeedHelpProps {}

const NeedHelp: React.FC<NeedHelpProps> = ({}) => {
  const classes = useStyles();

  const ratingLabels: { [index: string]: string } = {
    0: "Useless",
    1: "Poor",
    2: "Fair",
    3: "Good",
    4: "Very Good",
    5: "Excellent",
  };

  const [country, setCountry] = useState<string>();
  const [sidekick, setSidekick] = useState<string>();
  const [issue, setIssue] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const [rating, setRating] = useState<number | null>(3);
  const [hoverRating, setHoverRating] = useState<number>(-1);

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
            <Typography className={classes.modalTitle} variant="h4">
              Your issue has been received. I am dispatching{" "}
              {sidekick ?? "Fund Friend"} to {country ?? "your location"}.
            </Typography>
            <Typography className={classes.modalIssue} variant="h6">
              Your issue was: <em>"{issue}"</em>
            </Typography>
            <div className={classes.modalRating}>
              <Typography className={classes.modalText}>
                How did {sidekick ?? "Fund Friend"} do?
              </Typography>
              <div className={classes.modalRatingInfo}>
                <Rating
                  size="large"
                  defaultValue={0}
                  value={rating}
                  onChange={(e, newRating) => setRating(newRating)}
                  onChangeActive={(e, newHover) => setHoverRating(newHover)}
                />
                {rating !== null && (
                  <Box className={classes.modalRatingLabel} ml={2}>
                    {ratingLabels[hoverRating !== -1 ? hoverRating : rating]}
                  </Box>
                )}
              </div>
              <Typography className={classes.modalText} variant="body2">
                Your rating helps us measure our progress on these goals
              </Typography>
            </div>
          </Paper>
        </Fade>
      </Modal>
    </>
  );
};

export default NeedHelp;
