import React from "react";
import "./css/HomePage.css";
import NavBar from "../components/NavBar";

export default function HomePage() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="FullPage HomePage"></div>
      Home
    </React.Fragment>
  );
}
