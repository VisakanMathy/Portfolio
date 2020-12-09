import React from "react";
import logo from "../assets/Logo.png";
import { Pages } from "../App";
import "../css/NavBar.css";
import BArrow from "../assets/home.png";
import HamburgerMenu from "react-hamburger-menu";

interface NavBarProps {
  page: Pages;
  setPage: (Page: Pages) => void;
}
interface NavBarState {
  open: boolean;
}
export default class NavBar extends React.Component<NavBarProps, NavBarState> {
  constructor(props: NavBarProps) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleHBClick = this.handleHBClick.bind(this);
  }
  private handleHBClick() {
    this.setState({
      open: !this.state.open,
    });
  }

  private handleHBSelect(page: Pages) {
    this.props.setPage(page);
    this.handleHBClick();
  }
  private displayHeader() {
    if (this.props.page === Pages.Home) {
      return (
        <header className="Home Header">
          <img
            className="logo"
            src={logo}
            onClick={() => this.props.setPage(Pages.Home)}
          />
        </header>
      );
    } else {
      return (
        <div className="Header">
          <div className="Hamburger">
            <HamburgerMenu
              isOpen={this.state.open}
              menuClicked={this.handleHBClick}
              width={30}
              height={24}
              strokeWidth={1}
              rotate={0}
              color="black"
              borderRadius={0}
              animationDuration={0.5}
            />
          </div>
          <div
            className="overlay"
            style={this.state.open ? { height: "100vh" } : { height: "0vh" }}
          >
            <div className="overlay-content">
              <a onClick={() => this.handleHBSelect(Pages.Home)} id="Home">
                Home
              </a>
              <a onClick={() => this.handleHBSelect(Pages.About)} id="About">
                About Me
              </a>
              <a
                onClick={() => this.handleHBSelect(Pages.Projects)}
                id="Projects"
              >
                My Projects
              </a>
              <a
                onClick={() => this.handleHBSelect(Pages.Contact)}
                id="Contact"
              >
                Contact Me
              </a>
            </div>
          </div>

          <img
            className="BArrow"
            src={BArrow}
            onClick={() => this.props.setPage(Pages.Home)}
          />
          <div className="ButtonGroup">
            <button
              onClick={() => this.props.setPage(Pages.About)}
              disabled={this.props.page === Pages.About ? true : false}
            >
              About Me
            </button>
            <button
              onClick={() => this.props.setPage(Pages.Projects)}
              disabled={this.props.page === Pages.Projects ? true : false}
            >
              My Projects
            </button>
            <button
              onClick={() => this.props.setPage(Pages.Contact)}
              disabled={this.props.page === Pages.Contact ? true : false}
            >
              Contact Me
            </button>
          </div>
        </div>
      );
    }
  }
  render() {
    return this.displayHeader();
  }
}
