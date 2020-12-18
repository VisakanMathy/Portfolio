import React, { useEffect } from "react";
import "./css/ContactPage.css";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Form from "../components/Form";
import { Pages } from "../App";

export default function ContactPage() {
  return (
    <div className="FullPage ContactPage">
      <SideBar page={Pages.Contact} />
      <div className="PageSection">
        <div className="Title">Send a message</div>
        <div className="ContentDesc">
          <div className="left-10-5">
            Email: visakanmathivannan@gmail.com
            <br></br>
            Tel: +44 7910759854
          </div>
          <Form />
        </div>
      </div>
      <NavBar selected={Pages.Contact} />
    </div>
  );
}
