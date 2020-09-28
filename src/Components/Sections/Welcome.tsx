import React from "react";
import Text from "../Reusable/Text";
import Heading from "../Reusable/Heading";
import Item from "../Reusable/Item";
import Sidekick from "../Sidekick";

//Material UI Imports
import { makeStyles } from "@material-ui/core";
import {} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  welcome: {
    width: "100%",
    marginBottom: "40px",
  },
  heading: {
    fontWeight: "bold",
  },
  heroes: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "3%",
    marginTop: "50px",
    marginBottom: "40px",
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
        My sidekicks, <strong>Fund Friend</strong> and <strong>Unleash</strong>,
        help me achieve these goals.
      </Text>
      <div className={classes.heroes}>
        <Sidekick
          name="Fund Friend"
          image="https://i.ibb.co/4JdbhFp/image.png"
          description={
            <>
              Fund Friend helps further the progress on{" "}
              <strong>Goal #8: Decent Work and Economic Growth</strong> as
              represented by the 8s on his arms.
            </>
          }
          superpowers={[
            {
              name: "Enchanting effect on workers",
              description:
                "Workers are motivated to work faster and more efficiently as Fund Friend's shining green and gold suit symbolizes the prosperity and wealth they can attain through hard work.",
              avatar: "https://i.ibb.co/NxBx2ys/image.png",
            },
            {
              name: "Seed money for businesses",
              description:
                "Through the $ on his chest, Fund Friend makes initial investments into businessess in developing areas which helps propel economic growth and provide jobs for people living in that area. This improves standard of living and drives progress.",
              avatar: "https://i.ibb.co/Mktqwz6/Exchange.png",
            },
            {
              name: "Spot gender inequality",
              description:
                "Throughout the world, women are not given the same opportunities as men. Fund Friend spots inequality with his piercing blue eyes and combats it by providing resources to women who are marginalized.",
              avatar: "https://i.ibb.co/82ZMddR/image.png",
            },
          ]}
        />
        <Sidekick
          name="Unleash"
          image="https://i.ibb.co/rbhzT0J/image.png"
          description={
            <>
              Unleash helps further the progress on{" "}
              <strong>
                Goal #9: Industries, Innovation, and Infrastructure
              </strong>{" "}
              as represented by the 9 on his armor.
            </>
          }
          superpowers={[
            {
              name: "Harvest Raw Materials",
              description:
                "Through Unleash's incredible size, he is able to harvest most of the raw materials a country needs. This allows workers to move from the primary sector into the secondary sector, where they use these raw materials to create finished goods.",
              avatar: "https://i.ibb.co/rkvZ1L2/image.png",
            },
            {
              name: "Develop Infrastructure",
              description:
                "Many countries are unable to develop technologically as they lack the infrastructure to do so. Unleash is able to use his size and strength to quickly develop resilient infrastructure in areas that require it.",
              avatar: "https://i.ibb.co/jh4Smp9/image.png",
            },
            {
              name: "Harness Energy & Improve Innovation",
              description:
                "Electricity surges through Unleash as represented by the blue areas on his armor. This can serve as a sustainable energy supply for developing countries and also can help more people access the Internet.",
              avatar: "https://i.ibb.co/qgZMXTD/image.png",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Welcome;
