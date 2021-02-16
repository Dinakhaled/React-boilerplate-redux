import React from "react";
import { Router } from "react-router-dom";
import history from "../routes/History";
import Routes from "../routes/Routes";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "../utils/Theme";
// ========== General styles ==========
import "./App.scss";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Router history={history}>{Routes}</Router>
    </ThemeProvider>
  );
};

export default App;
