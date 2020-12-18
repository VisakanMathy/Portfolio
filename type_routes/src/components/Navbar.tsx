import React from "react";
import { Link } from "react-router-dom";
import "./css/NavBar.css";
import { Pages } from "../App";

interface NavBarProps {
  selected: Pages;
}
export default function NavBar(props: NavBarProps) {
  return (
    <div className="NavBar">
      <nav>
        <div className="NavButtonGroup">
          <Link to="/about">
            <button className={props.selected === Pages.About ? "" : "blurred"}>
              About Me
            </button>
          </Link>
          <Link to="/projects">
            <button
              className={props.selected === Pages.Projects ? "" : "blurred"}
            >
              My Projects
            </button>
          </Link>
          <Link to="/contact">
            <button
              className={props.selected === Pages.Contact ? "" : "blurred"}
            >
              Contact Me
            </button>
          </Link>
        </div>
      </nav>
      <div className="ButtonGroup"></div>
    </div>
  );
}
