//React Imports
import React from "react";

//Material UI Imports
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { amber, lightBlue } from "@material-ui/core/colors";

const Theme: React.FC = ({ children }) => {
  const theme = createMuiTheme({
    overrides: {
      MuiListItemText: {
        primary: {
          fontSize: "1.25rem",
        },
      },
    },
    typography: {
      fontFamily: "Roboto, Serif",
    },
    palette: {
      primary: {
        main: lightBlue["500"]
      },
      secondary: {
        main: amber["500"]
      }
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
