import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/css/index.css";

import Home from "./Home";
import Skill09 from "./Skill09";
import Skill08 from "./Skill08";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/skill09">
          <Skill09 />
        </Route>
        <Route path="/skill08">
          <Skill08 />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
