// React Imports
import React, { ReactElement } from "react";

// Material UI Imports
import {
  makeStyles,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@material-ui/core";
import {} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  subtext: {
    marginLeft: "70px",
  },
}));

interface ItemProps {
  avatar: string;
  subtext?: ReactElement<any, any> | string;
}

const Item: React.FC<ItemProps> = ({ avatar, children, subtext }) => {
  const classes = useStyles();
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={avatar} />
        </ListItemAvatar>
        <ListItemText primary={children} />
      </ListItem>
      <Typography className={classes.subtext} variant="body1">
        {subtext}
      </Typography>
    </>
  );
};
export default Item;
