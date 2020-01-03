import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "./History";
// ========= Components =========
import Home from "../containers/Home/Home";

const Routes = (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);

export default Routes;