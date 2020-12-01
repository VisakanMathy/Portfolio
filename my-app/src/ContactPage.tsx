import React, { FormEvent } from "react";
import { Pages } from "./App";

interface ContactPageProps {
  page: Pages;
  setPage: (Page: Pages) => void;
  scrollToNode: (node: any) => void;
}
interface ContactPageState {
  name: string;
  email: string;
  message: string;
}
export default class ContentPage extends React.Component<
  ContactPageProps,
  ContactPageState
> {
  constructor(props: ContactPageProps) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }
  onNameChange(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
    this.setState({ name: event.currentTarget.value });
  }

  onEmailChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ email: event.currentTarget.value });
  }

  onMessageChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ message: event.currentTarget.value });
  }
  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }
  handleSubmit(e: FormEvent) {
    e.preventDefault();

    fetch("http://localhost:3002/send", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "success") {
          alert("Message Sent.");
          this.resetForm();
        } else if (response.status === "fail") {
          alert("Message failed to send.");
        }
      });
  }

  render() {
    return (
      <div className="App">
        <form id="contact-form" method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={this.state.name}
              onChange={this.onNameChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <input
              className="form-control"
              id="message"
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
