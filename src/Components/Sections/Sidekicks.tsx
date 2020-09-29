// React Imports
import React from "react";
import Text from "../Reusable/Text";
import Sidekick from "../Sidekick";
import Problems from "./Problems";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import {} from "@material-ui/core";
import {} from "@material-ui/icons";
import Heading from "../Reusable/Heading";

const useStyles = makeStyles((theme) => ({
  sidekicks: {
    width: "100%",
  },
  heroes: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "3%",
    marginTop: "50px",
    marginBottom: "40px",
  },
}));

interface SidekicksProps {}

const Sidekicks: React.FC<SidekicksProps> = ({}) => {
  const classes = useStyles();

  return (
    <div className={classes.sidekicks}>
      <Heading>Sidekicks</Heading>
      <Text>
        My sidekicks, <strong>Fund Friend</strong> and <strong>Unleash</strong>,
        help me solve these issues.
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
              name: "Motivate Workers",
              description:
                "Workers are motivated to work faster and more efficiently as Fund Friend's shining green and gold suit symbolizes the prosperity and wealth they can attain through hard work.",
              avatar: "https://i.ibb.co/NxBx2ys/image.png",
            },
            {
              name: "Invest in Businesses",
              description:
                "Through the $ on his chest, Fund Friend makes initial investments into businessess in developing areas which helps propel economic growth in those areas while providing jobs for people living there. This improves the general standard of living and drives progress.",
              avatar: "https://i.ibb.co/Mktqwz6/Exchange.png",
            },
            {
              name: "Spot Gender Inequality",
              description:
                "Throughout the world, women are not given the same opportunities as men. Fund Friend spots inequality with his piercing blue eyes and combats it by providing resources to women who are marginalized.",
              avatar: "https://i.ibb.co/82ZMddR/image.png",
            },
          ]}
          drawbacks={[
            {
              name: "Corruption",
              description:
                "The funds that Fund Friend provides don't always go towards improving a nation's economy. Often, powerful leaders use these funds to further their own interests.",
              avatar: "https://i.ibb.co/4JCjTzD/image.png",
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
                "Unleash's incredible size allows him to harvest most of the raw materials a country needs. This allows workers to move from the primary to the secondary sector, where they use these raw materials to create finished goods.",
              avatar: "https://i.ibb.co/rkvZ1L2/image.png",
            },
            {
              name: "Develop Infrastructure",
              description:
                "Many countries are unable to develop technologically as they lack the infrastructure to do so. Unleash uses his size and strength to develop resilient infrastructure in areas that require it.",
              avatar: "https://i.ibb.co/jh4Smp9/image.png",
            },
            {
              name: "Harness Energy & Improve Innovation",
              description:
                "Electricity surges through Unleash as represented by the blue areas on his armor. This can serve as a sustainable energy supply for developing countries and can also help more people access the Internet.",
              avatar: "https://i.ibb.co/qgZMXTD/image.png",
            },
          ]}
          drawbacks={[
            {
              name: "Stagnation",
              description:
                "Unleash's enormous size can also be a hindrance as he often needs to take breaks and is slow in completing his tasks, causing delays in development.",
              avatar: "https://i.ibb.co/yfNR9cV/image.png",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Sidekicks;
