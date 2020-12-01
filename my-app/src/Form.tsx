import React, { FormEvent } from "react";
import axios from "axios";

interface FormProps {}
interface FormState {
  name: string;
  email: string;
  message: string;
  mailSent: boolean;
  error?: string;
}
export default class Form extends React.Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      mailSent: false,
      error: undefined,
    };
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
    const API_PATH = "http://localhost/Portfolio/index.php";
    axios({
      method: "post",
      url: API_PATH,
      headers: { "content-type": "application/json" },
      data: this.state,
    })
      .then((result) => {
        console.log(result);
        this.setState({
          mailSent: result.data.sent,
        });
      })
      .catch((error) => this.setState({ error: error.message }));
  }
  //     e.preventDefault();
  //     console.log(this.state);
  //     fetch("http://localhost/Portfolio/", {
  //       method: "POST",
  //       body: JSON.stringify(this.state),
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((response) => {
  //         if (response.status === "success") {
  //           alert("Message Sent.");
  //           this.resetForm();
  //         } else if (response.status === "fail") {
  //           alert("Message failed to send.");
  //         }
  //       });
  //   }
  render() {
    return (
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
        <button
          onClick={(e) => this.handleSubmit(e)}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
        <div>
          {this.state.mailSent && <div>Thank you for contcting us.</div>}
        </div>
      </form>
    );
  }
}
