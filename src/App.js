import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Components
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" component={HomePage} ></Route>
          <Route path="/home" component={HomePage}></Route>
        </Switch>
    </Router>
  );
}
