import React from "react";
import "./css/SideBar.css";
import { Pages } from "../App";
import Content from "../cms/CMS.json";

import aboutImage from "../assets/About.png";
import contactImage from "../assets/Contact.png";
import projectImage from "../assets/Project.png";

const Images = [aboutImage, contactImage, projectImage];

interface SideBarProps {
  page: Pages;
}
export default function SideBar(props: SideBarProps) {
  let summary = [];
  summary = Content.Pages[props.page].summary.map((text, index) => {
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

  return (
    <div className="SideBar" id={Pages[props.page]}>
      <div className="SideContent">
        <div className="SideTitle">
          <img alt="Page Title" src={Images[props.page - 1]}></img>
        </div>
        <div className="SideText">{summary}</div>
        <div className="SideFooter"></div>
      </div>
    </div>
  );
}
