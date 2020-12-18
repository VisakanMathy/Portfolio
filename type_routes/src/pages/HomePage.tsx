import React, { useEffect } from "react";
import "./css/HomePage.css";
import NavBar from "../components/NavBar";
import { Pages } from "../App";

export default function HomePage() {
  return (
    <div className="FullPage HomePage">
      <NavBar selected={Pages.Home} />
    </div>
  );
}
