import React from "react";
import { Pages } from "../App";
import Content from "../CMS.json";
import aboutImage from "../assets/About.png";
import contactImage from "../assets/Contact.png";
import projectImage from "../assets/Project.png";

const Images = [aboutImage, contactImage, projectImage];

interface SideBarProps {
  page: Pages;
  setPage: (Page: Pages) => void;
}
interface SideBarState {}
export default class SideBar extends React.Component<
  SideBarProps,
  SideBarState
> {
  private displaySummary() {
    let summary = [];
    summary = Content.Pages[this.props.page].summary.map((text, index) => {
      if (index === 0) {
        return <React.Fragment key={"sidebar" + index}>{text}</React.Fragment>;
      } else {
        return (
          <React.Fragment key={"sidebar" + index}>
            <br />
            <br />
            {text}
          </React.Fragment>
        );
      }
    });
    return summary;
  }
  render() {
    if (this.props.page !== Pages.SpecifiedProject) {
      return (
        <div className={"SideBar"} id={Pages[this.props.page]}>
          <div className="SideContent">
            <div className="SideTitle">
              <img alt="Page Title" src={Images[this.props.page - 1]}></img>
            </div>
            <div className="SideText">
              <i>{this.displaySummary()}</i>
            </div>
            <div className="SideFooter">
              <button>RESUME</button>
            </div>
          </div>
        </div>
      );
    } else return <></>;
  }
}
