import React from "react";
import "./css/ProjectPage.css";
import Navbar from "../components/Navbar";
import {
  Switch,
  Route,
  useRouteMatch,
  Link,
  RouteComponentProps,
} from "react-router-dom";
import Content from "../cms/CMS.json";

export default function ProjectPage() {
  let match = useRouteMatch();
  return (
    <React.Fragment>
      <Navbar />
      <div className="FullPage ProjectPage">
        <Switch>
          <Route path={`${match.path}/:ProjectId`} component={Project}></Route>
          <Route path={match.path}>
            Project
            <br></br>
            <ul>
              {Content.Projects.map((string, index) => {
                return (
                  <li>
                    <Link to={match.url + "/:" + index}>{string.title}</Link>
                  </li>
                );
              })}
            </ul>
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
}

type TParams = { ProjectId: string };

function Project({ match }: RouteComponentProps<TParams>) {
  let project = Content.Projects[Number(match.params.ProjectId.substring(1))];
  return <h3>{project.title}</h3>;
}
