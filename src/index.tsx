import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
// import theme from './theme.json';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#989898",
      main: "#808080",
      dark: "#606060",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
  // typography: {
  //   fontFamily: [
  //     '"Ink Free"',
  //     "BlinkMacSystemFont",
  //     '"Segoe UI"',
  //     "Roboto",
  //     '"Helvetica Neue"',
  //     "Arial",
  //     "sans-serif",
  //     '"Apple Color Emoji"',
  //     '"Segoe UI Emoji"',
  //     '"Segoe UI Symbol"',
  //   ].join(","),
  // },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
