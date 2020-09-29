// React Imports
import React, { useState, ReactElement, Fragment } from "react";
import Text from "./Reusable/Text";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import { Button, List, Typography } from "@material-ui/core";
import {} from "@material-ui/icons";
import Item from "./Reusable/Item";

interface StyleProps {
  hovering: boolean;
}

const useStyles = makeStyles((theme) => ({
  sidekick: ({ hovering }: StyleProps) => ({
    boxShadow: hovering ? "2px 2px 10px 10px #81ecec" : "none",
    transition: "box-shadow 0.5s",
    border: "1px solid black",
    borderRadius: "10px",
    padding: "8px",
    position: "relative",
    paddingBottom: "70px",
  }),
  heroName: {
    fontFamily: "Bangers, cursive",
    letterSpacing: "2.5px",
    textAlign: "center",
    fontWeight: 600,
  },
  image: {
    height: "300px",
    width: "100%",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
  description: {
    fontSize: "18px",
  },
  summon: {
    position: "absolute",
    bottom: "10px",
    left: "37%",
  },
}));

interface Item {
  name: string;
  description: string;
  avatar: string;
}

interface SidekickProps {
  name: string;
  description: ReactElement<any, any> | string;
  image: string;
  superpowers: Item[];
  drawbacks: Item[];
}

const Sidekick: React.FC<SidekickProps> = ({
  name,
  description,
  image,
  superpowers,
  drawbacks,
}) => {
  const [hovering, setHovering] = useState<boolean>(false);
  const classes = useStyles({ hovering });

  const scrollToForm = () => {
    document.getElementById("need-help")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div
      onMouseOver={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={classes.sidekick}
    >
      <Typography className={classes.heroName} variant="h4">
        {name}
      </Typography>
      <img className={classes.image} src={image} />
      <Text className={classes.description}>
        <>
          {description}
          {[superpowers, drawbacks].map((list, i) => (
            <Fragment key={i}>
              <Text variant="h5">
                <strong>{i === 0 ? "Superpowers" : "Drawbacks"}</strong>
              </Text>
              <List>
                {list.map(({ name, description, avatar }, i) => (
                  <Item key={i} avatar={avatar} subtext={description}>
                    {name}
                  </Item>
                ))}
              </List>
            </Fragment>
          ))}
        </>
      </Text>
      <Button
        onClick={scrollToForm}
        className={classes.summon}
        color="primary"
        variant="outlined"
      >
        Summon
      </Button>
    </div>
  );
};

export default Sidekick;
