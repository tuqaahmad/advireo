//libraries imports
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//pages imports
import LoginPage from "./views/Auth/loginPage";
import HomePage from "./views/Home/HomePage";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/home" exact component={HomePage} />
      </Switch>
    </Router>
  );
}
