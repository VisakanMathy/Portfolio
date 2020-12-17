import React from "react";
import { Link } from "react-router-dom";
import "./css/NavBar.css";


export default function NavBar {
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
