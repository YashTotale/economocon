// React Imports
import React, {useState} from "react";
import Heading from "./Reusable/Heading";
import Text from "./Reusable/Text";


// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import {} from "@material-ui/icons";

interface StyleProps {
  hovering: boolean;
}

const useStyles = makeStyles((theme) => ({
  sidekick: ({hovering}: StyleProps) => ({
    boxShadow: hovering ? "2px 2px 10px 10px #81ecec" : "none",
    transition: "box-shadow 0.5s",
    border:"1px solid black",
    borderRadius: "10px",
    padding:"8px",
    position:"relative",
    paddingBottom:"70px",
  }),
  heroName: {
    textAlign:"center",
    margin:"10px",
    fontSize: "35px",
    backgroundColor: "black",
    color:"white",
  },
  image: {
    height: "300px",
    width:"100%",
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
  }
}));

interface SidekickProps {
  name: string;
  description: string;
  image: string;
}

const Sidekick: React.FC<SidekickProps> = ({name, description, image}) => {
  const [hovering, setHovering] = useState<boolean>(false);
  const classes = useStyles({hovering});

  const scrollToForm = () => {
    document.getElementById("need-help")?.scrollIntoView({
      behavior: "smooth"
    })
  }

  return (
  <div 
    onMouseOver={() => setHovering(true)} 
    onMouseLeave={() => setHovering(false)} 
    className = {classes.sidekick}
  >
    <Heading className ={classes.heroName}>{name}</Heading>
    <img className={classes.image} src={image} />
    <Text className={classes.description}>{description}</Text>
    <Button onClick={scrollToForm} className={classes.summon} color = "primary" variant="outlined">Summon</Button>
  </div>
 )
};

export default Sidekick;
