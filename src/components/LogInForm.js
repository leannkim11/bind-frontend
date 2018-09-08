import React, { Component } from "react";
import { withRouter } from "react-router";
import { loginUser } from "../actions/user";
import { connect } from "react-redux";

class LogInForm extends Component {
  handleFormSubmit = e => {
    e.preventDefault();
    console.log(this.props.history);
    this.props.loginUser(this.state, this.props.history);
  };

  state = {
    email: "",
    password: ""
  };

  handleFormChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <form
          id="sign-up-form"
          action="/loggedin"
          onSubmit={this.handleFormSubmit}
        >
          <img src="./bind-logo.svg" alt="" id="sign-up-logo" />
          <div className="form-group">
            <input
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Email"
              value={this.props.email}
              onChange={this.handleFormChange}
            />
          </div>
          <div className="form-group">
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={this.props.password}
              onChange={this.handleFormChange}
            />
          </div>
          <br />
          <div className="form-bottom">
            <button type="submit" className="btn btn-outline-secondary">
              Log In
            </button>

            <br />
            <br />
            <a href="/signup">click here to sign up</a>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { loginUser }
)(withRouter(LogInForm));
