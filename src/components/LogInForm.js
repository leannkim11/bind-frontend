import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect, Link } from "react-router";
import { loginUser } from "../actions/user";

export default class LogInForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleFormSubmit = e => {
    e.preventDefault();
    console.log("login button clicked");

    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        password: "leannleann",
        email: "leann@leann.com"
      })
    })
      .then(res => res.json())
      .then(json => localStorage.setItem("token", json.jwt));
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <img src="./bind-logo.svg" alt="" id="mainlogo" className="center" />
        <form
          id="sign-up-form"
          action="/loggedin"
          onSubmit={this.handleFormSubmit}
        >
          <div className="form-group">
            <label>Email address</label>
            <input
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <a href="/loggedin" type="submit" className="btn btn-primary">
            Submit
          </a>

          <br />
          <br />
          <a href="/signup">click here to sign up</a>
        </form>
      </React.Fragment>
    );
  }
}
