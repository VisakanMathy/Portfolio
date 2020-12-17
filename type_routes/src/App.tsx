import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProjectPage from "./Pages/ProjectPage";
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";
import "./css/App.css";

export enum Pages {
  Home,
  About,
  Contact,
  Projects,
  SpecifiedProject,
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/projects">
          <ProjectPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}
