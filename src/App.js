import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-social/bootstrap-social.css";
import "bootstrap-social/assets/img/bootstrap-social.png";
import "font-awesome/css/font-awesome.css";
import { Route, Switch } from "react-router-dom";
import LoginOptions from "./components/LoginOptions";
import Admin from "./components/Admin";
import Staff from "./components/Staff";
import PageNotFound from "./components/PageNotFound";
import ManageFlightDetails from "./components/ManageFlightDetails";

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LoginOptions} />
        <Route path="/admin" component={Admin} />
        <Route path="/staff" component={Staff} />
        <Route path="/staff/:flightId" component={ManageFlightDetails} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
}
