import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./css/App.css";
import NavBar from "./views/NavBar";
import SideBar from "./views/SideBar";
import PageContent from "./views/PageContent";
import HomeContent from "./pages/HomeContent";
import "./css/PageContent.css";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";

export enum Pages {
  Home,
  About,
  Contact,
  Projects,
  SpecifiedProject,
}

interface MyProps {}
interface MyState {
  page: Pages; // like this
}

export default class App extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
