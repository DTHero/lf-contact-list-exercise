import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NotFound from "../components/not-found/NotFound";
import App from "../App";
import Login from "../components/login/Login";
import PrivateRoute from "./PrivateRoute";

const MainRoute = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/404" component={NotFound} />

        <PrivateRoute exact path="/" component={App} />

        {/* Redirect link '/404' always place at bottom */}
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

export default MainRoute;
