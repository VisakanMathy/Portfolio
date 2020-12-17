import React from "react";
import "./css/AboutPage.css";
import NavBar from "../components/NavBar";

export default function AboutPage() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="FullPage AboutPage"></div>
      About
    </React.Fragment>
  );
}
