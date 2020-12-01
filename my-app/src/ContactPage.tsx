import React, { FormEvent } from "react";
import { Pages } from "./App";
import Form from "./Form";

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
      <div>
        <div className="ContentHolder scrollSnap">
          <div className="Content limit Center">
            <Form />
          </div>
        </div>
      </div>
    );
  }
}
