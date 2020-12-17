import React from "react";
import "./css/HomePage.css";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="FullPage HomePage"></div>
    </React.Fragment>
  );
}
