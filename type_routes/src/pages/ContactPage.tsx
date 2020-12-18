import React, { useEffect } from "react";
import "./css/ContactPage.css";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { Pages } from "../App";

export default function ContactPage() {
  return (
    <div className="FullPage">
      <SideBar page={Pages.Contact} />
      <div className="PageSection"></div>
      <NavBar selected={Pages.Contact} />
    </div>
  );
}
