import React from "react";
import "./css/AboutPage.css";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="FullPage AboutPage"></div>
      About
    </React.Fragment>
  );
}
