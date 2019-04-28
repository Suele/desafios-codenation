import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";

ReactDOM.render(
  <Router>
    <Route path='/' component={App} />
  </Router>,
  document.getElementById("root")
);
