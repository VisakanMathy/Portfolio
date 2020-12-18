import React, { useEffect } from "react";
import "./css/ProjectPage.css";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { Pages } from "../App";

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
    <div className="FullPage">
      <Switch>
        <Route path={`${match.path}/:ProjectId`} component={Project}></Route>
        <Route path={match.path}>
          <SideBar page={Pages.Projects} />
          <div className="PageSection">
            <div style={{ height: "6vh" }} />
            {Content.Projects.map((project, index) => {
              return (
                <Link
                  to={match.url + "/:" + index}
                  className="ProjectTile"
                  key={"Project" + index}
                >
                  <div className="ProjectTileDescription">
                    <div className="ProjectTileTitle">{project.title}</div>

                    <div className="ProjectTileSummary">{project.summary}</div>
                    <div className="ProjectTileTags">
                      <ul>
                        {project.tags.map((tag, tagIndex) => {
                          return (
                            <li key={"project" + index + "tag" + tagIndex}>
                              {tag}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="ProjectTileImageContainer">
                    <img className="ProjectTileImage" src={project.image}></img>
                  </div>
                </Link>
              );
            })}
          </div>
        </Route>
      </Switch>
      <NavBar selected={Pages.Projects} />
    </div>
  );
}

interface TParams {
  ProjectId: string;
}
function Project({ match }: RouteComponentProps<TParams>) {
  let project = Content.Projects[Number(match.params.ProjectId.substring(1))];
  return <h3>{project.title}</h3>;
}
