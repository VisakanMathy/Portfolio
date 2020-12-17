import React from "react";
import { Link } from "react-router-dom";

interface NavBarProps {}
interface NavBarState {
  open: boolean;
}
export default class NavBar extends React.Component<NavBarProps, NavBarState> {
  constructor(props: NavBarProps) {
    super(props);
  }

  render() {
    return (
      <div className="NavBar">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="ButtonGroup"></div>
      </div>
    );
  }
}
