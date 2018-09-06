import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router";
import { loginUser } from "../actions/user";

export default class LogInForm extends Component {
  state = {
    email: "",
    password: ""
  };

  render() {
    return (
      <React.Fragment>
        <img src="./bind-logo.svg" alt="" id="mainlogo" className="center" />
        <form id="sign-up-form" action="/loggedin">
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              col-5
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              col-5
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>

          <br />
          <br />
          <a href="/signup">click here to sign up</a>
        </form>
      </React.Fragment>
    );
  }
}
