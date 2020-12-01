import React, { FormEvent } from "react";
import { Pages } from "./App";
import Form from "./Form";
import "./ContentPage.css";

interface ContactPageProps {
  page: Pages;
  setPage: (Page: Pages) => void;
  scrollToNode: (node: any) => void;
}
interface ContactPageState {}
export default class ContentPage extends React.Component<
  ContactPageProps,
  ContactPageState
> {
  constructor(props: ContactPageProps) {
    super(props);
  }

  render() {
    return (
      <div className="ContentHolder">
        <div className="Content limit">
          <div className="ContentTitle Contact left-10-5">Send a message</div>
          <div className="ContentDesc">
            <div className="left-10-5">
              Email: visakanmathivannan@gmail.com
              <br></br>
              Tel: +44 7910759854
            </div>
            <Form />
          </div>
        </div>
      </div>
    );
  }
}
