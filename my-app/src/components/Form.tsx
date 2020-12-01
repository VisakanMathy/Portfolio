import React, { FormEvent } from "react";
import axios from "axios";
import "../css/Form.css";

interface FormProps {}
interface FormState {
  name: string;
  email: string;
  message: string;
  subject: string;
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
      subject: "",
      mailSent: false,
      error: undefined,
    };
  }
  onNameChange(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
    if (this.state.mailSent === true) {
      this.setState({ mailSent: false });
    }
    this.setState({ name: event.currentTarget.value });
  }
  onEmailChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ email: event.currentTarget.value });
    if (this.state.mailSent === true) {
      this.setState({ mailSent: false });
    }
  }
  onSubjectChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ subject: event.currentTarget.value });
    if (this.state.mailSent === true) {
      this.setState({ mailSent: false });
    }
  }
  onMessageChange(event: React.FormEvent<HTMLTextAreaElement>) {
    this.setState({ message: event.currentTarget.value });
    if (this.state.mailSent === true) {
      this.setState({ mailSent: false });
    }
  }
  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }
  handleSubmit(e: FormEvent) {
    e.preventDefault();
    const API_PATH = "https://salty-dawn-06653.herokuapp.com/";
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
          name: "",
          email: "",
          message: "",
          subject: "",
        });
      })
      .catch((error) => this.setState({ error: error.message }));
  }
  render() {
    return (
      <form id="contact-form" method="POST">
        <div className="form-wrapper">
          <div className="form-inputs">
            <div className="form-left">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={this.state.name}
                  onChange={this.onNameChange.bind(this)}
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  value={this.state.email}
                  onChange={this.onEmailChange.bind(this)}
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="subject"
                  className="form-control"
                  id="subject"
                  aria-describedby="subject"
                  value={this.state.subject}
                  onChange={this.onSubjectChange.bind(this)}
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className="form-right">
              <textarea
                className="form-control"
                id="message"
                value={this.state.message}
                onChange={this.onMessageChange.bind(this)}
                rows={8}
                placeholder="Message..."
              />
            </div>
          </div>
          <div className="form-button">
            <button onClick={(e) => this.handleSubmit(e)} type="submit">
              SUBMIT
            </button>
          </div>
        </div>

        <div>
          {this.state.mailSent && <div>Thank you for contcting us.</div>}
        </div>
      </form>
    );
  }
}
