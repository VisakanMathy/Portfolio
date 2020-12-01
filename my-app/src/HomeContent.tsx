import React from "react";
import { Pages } from "./App";
import "./HomePage.css";
import Content from "./CMS.json";

interface HomeContentProps {
  setPage: (Page: Pages) => void;
}
interface HomeContentState {}
export default class HomeContent extends React.Component<
  HomeContentProps,
  HomeContentState
> {
  constructor(props: HomeContentProps) {
    super(props);
  }

  render() {
    return (
      <div className="HomeBody">
        <div className="PIgroup">
          <div
            className="PostIt"
            id="About"
            onClick={() => this.props.setPage(Pages.About)}
          >
            <div className="PItitle">{Content.Pages[Pages.About].title}</div>
            <div className="PIintro">{Content.Pages[Pages.About].intro}</div>
          </div>
          <div
            className="PostIt"
            id="Contact"
            onClick={() => this.props.setPage(Pages.Contact)}
          >
            <div className="PItitle">{Content.Pages[Pages.Contact].title}</div>
            <div className="PIintro"> {Content.Pages[Pages.Contact].intro}</div>
          </div>
          <div
            className="PostIt"
            id="Projects"
            onClick={() => this.props.setPage(Pages.Projects)}
          >
            <div className="PItitle">{Content.Pages[Pages.Projects].title}</div>
            <div className="PIintro">{Content.Pages[Pages.Projects].intro}</div>
          </div>
        </div>
      </div>
    );
  }
}
