import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import List from "./componensts/List/";
import Card from "./componensts/Card/";

const Routers = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={List} />
      <Route path="/card:id" component={Card} />
    </Switch>
  </Router>
);

export default Routers;
