import React, { Component } from "react";

export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  }

  handleFormChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleFormSubmit = e => {
    e.preventDefault();

    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        password: this.state.password,
        email: this.state.email
      })
    })
      .then(res => res.json())
      .then(json => localStorage.setItem("token", json.jwt))
      .then((window.location = "http://localhost:4000/login"));

  };

  render() {
    return (
      <div>
        <form id="sign-up-form" onSubmit={this.handleFormSubmit}>
          <img src="./bind-logo.svg" alt="" id="sign-up-logo" />
          <h5>start networking with the right people</h5>
          <br />
          <div className="form-group">
            {/* <label for="name">Name</label> */}
            <input
              name="name"
              className="form-control"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleFormChange}
            />
          </div>
          <div className="form-group">
            {/* <label for="exampleInputEmail1">Email address</label> */}
            <input
              name="email"
              className="form-control"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleFormChange}
            />
          </div>
          <div className="form-group">
            {/* <label for="exampleInputPassword1">Password</label> */}
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleFormChange}
            />
          </div>
          <br />
          <div classNameName="form-group">
            <a href="/">
              <button type="submit" className="btn btn-outline-secondary">
                Sign Up
              </button>
            </a>
          </div>
        </form>
      </div>
    );
  }
}
