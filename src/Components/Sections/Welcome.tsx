import React from "react";
import Text from "../Reusable/Text";
import Heading from "../Reusable/Heading";
import Item from "../Reusable/Item";
import Sidekick from "../Sidekick";

//Material UI Imports
import { makeStyles, List, Typography } from "@material-ui/core";
import {} from "@material-ui/icons";

interface StyleProps {
  hoveringImage1: boolean;
  hoveringImage2: boolean;
}

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
        instead, I'm a website designed to send help to places that are trying
        to innovate and industrialize.
      </Text>
      <Text>
        My sidekicks, Fund Friend and ... help me achieve these goals.
      </Text>
      <div className={classes.heroes}>
        <Sidekick
          name="Fund Friend"
          image="https://lh3.googleusercontent.com/-4xCdCPn5T04/X3Ec-AJNN9I/AAAAAAAAAHY/7wkPnUPqfBQeIr6IYfINZhKv58j1AVJtgCK8BGAsYHg/s0/2020-09-27.png"
          description={
            <>
              Fund Friend helps further the progress on{" "}
              <strong>Goal #8: Decent Work and Economic Growth</strong> as
              represented by the 8s on his arms.
            </>
          }
          superpowers={[
            {
              name:
                "Enchanting effect of his shining green and gold suit on workers.",
              description:
                "Workers are motivated to work faster and more efficiently as Fund Friend's suit symbolizes the prosperity and wealth they can attain through hard work.",
              avatar: "https://i.ibb.co/NxBx2ys/image.png",
            },
            {
              name: "Seed money for small businesses",
              description:
                "Initial investments into businesses in developing areas helps propel economic growth and provide jobs for people living in that area. This improves standard of living and drives progress.",
              avatar: "https://i.ibb.co/Mktqwz6/Exchange.png",
            },
          ]}
          // description={
          //   <>
          //      Fund Friend also provides{" "}
          //     <em>seed money to small businesses</em> in developing areas,
          //     symbolized by the $ on his chest. These initial investments help
          //     fuel economic growth in these areas as well as providing jobs to
          //     the people living there.
          //   </>
          // }
          // description="Fund Friend's presence provides inspiration to workers. This allows them to work faster
          //   and boost the economy. His blue eyes can give insight about a countries economy. The green and yellow represents paper money and gold.
          //   Finally, The 8 on his arms represents the SDG that he fights for."
        />

        {/* <Sidekick
          name="MoneyMan"
          image="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          description="Hello"
        /> */}
      </div>
    </div>
  );
};

export default Welcome;
