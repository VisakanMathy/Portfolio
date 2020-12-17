import React from "react";
import { Link } from "react-router-dom";
import "./css/NavBar.css";

export default function NavBar() {
  return (
    <div className="NavBar">
      <nav>
        <div className="NavButtonGroup">
          <Link to="/about">
            <button> About Me</button>
          </Link>
          <Link to="/projects">
            <button>Projects</button>
          </Link>
          <Link to="/contact">
            <button>Contact</button>
          </Link>
        </div>
      </nav>
      <div className="ButtonGroup"></div>
    </div>
  );
}
