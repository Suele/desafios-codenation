import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/' component={App} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
