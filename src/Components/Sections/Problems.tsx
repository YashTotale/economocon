// React Imports
import React from "react";
import Text from "../Reusable/Text";
import Heading from "../Reusable/Heading";
import Item from "../Reusable/Item";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import { List } from "@material-ui/core";
import {} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: "bold",
  },
}));

interface ProblemsProps {}

const Problems: React.FC<ProblemsProps> = ({}) => {
  const classes = useStyles();

  return (
    <div>
      <Heading>Problems</Heading>
      <Text>
        Today, the world faces many problems when it comes to sustainable
        economic growth and development, especially due to{" "}
        <strong>COVID-19</strong>, which has exacerbated many of these issues.
        <List>
          <Item avatar="https://i.ibb.co/xGpLGbp/image.png">
            Nearly <strong>half</strong> of the global workforce is at risk of
            losing their jobs
          </Item>
          <Item avatar="https://i.ibb.co/jw55tNK/image.png">
            1 in 5 countries expect their per capita incomes to{" "}
            <strong>decline or stagnate</strong> in 2020
          </Item>
          <Item avatar="https://i.ibb.co/yWsSG1R/image.png">
            Women earn <strong>12.5% less</strong> than men in 89% of countries
            with data
          </Item>
          <Item avatar="https://i.ibb.co/MVjS6sp/image.png">
            <strong>16%</strong> of the world's population does not have access
            to mobile networks
          </Item>
        </List>
      </Text>
      <Text>
        To measure our progress on these issues, we can look at metrics that
        track the economic health of nations and the world in general. The main
        metric that does so is the <strong>Gross Domestic Product (GDP)</strong>
        , the value of the goods and services produced by a country. We can also
        look at the <strong>unemployment rate</strong> of countries around the
        world to get a sense of their economic health.
      </Text>
    </div>
  );
};

export default Problems;
