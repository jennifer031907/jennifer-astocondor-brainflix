import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Components
import HomePage from "./pages/HomePage";
import VideoUploadPage from "./pages/VideoUploadPage";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} ></Route>
        <Route exact path="/home" component={HomePage}></Route>
        <Route  path="/video/:id" component={HomePage}></Route>
        <Route exact path="/upload" component={VideoUploadPage}></Route>
      </Switch>
    </Router>
  );
}
