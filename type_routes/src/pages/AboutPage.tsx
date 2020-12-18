import React, { useEffect } from "react";
import "./css/AboutPage.css";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { Pages } from "../App";

export default function AboutPage() {
  return (
    <div className="FullPage">
      <SideBar page={Pages.About} />
      <div className="PageSection"></div>
      <NavBar selected={Pages.About} />
    </div>
  );
}
