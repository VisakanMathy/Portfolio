import React, { useEffect } from "react";
import "./css/HomePage.css";
import NavBar from "../components/NavBar";

export default function HomePage() {
  return (
    <React.Fragment>
      <div className="FullPage HomePage"></div>
      <NavBar />
      Home
    </React.Fragment>
  );
}
