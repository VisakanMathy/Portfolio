import React from "react";
import "./css/ProjectPage.css";
import Navbar from "../components/Navbar";
import {
  Switch,
  Route,
  useRouteMatch,
  useParams,
  Link,
} from "react-router-dom";

export default function ProjectPage() {
  let match = useRouteMatch();
  let x = ["Project1", "Project2", "Project3", "Project4"];
  return (
    <React.Fragment>
      <Navbar />
      <div className="FullPage ProjectPage">
        <br></br>

        <ul>
          {x.map((string, index) => {
            return (
              <li>
                <Link to={match.url + "/:" + string}>{string}</Link>
              </li>
            );
          })}
        </ul>

        <Switch>
          <Route path={`${match.path}/:topicId`}>
            <Topic />
          </Route>
          <Route path={match.path}>
            <h3>Please select a topic.</h3>
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
}

function Topic() {
  let topicId = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
