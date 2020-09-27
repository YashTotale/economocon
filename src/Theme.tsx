//React Imports
import React from "react";

//Material UI Imports
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

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
    palette: {},
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
