import React, { Component } from "react";

export default class SignUpForm extends Component {
  handleFormSubmit = e => {
    e.preventDefault();

    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.props.name,
        password: this.props.password,
        email: this.props.email
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
          <div class="form-group">
            {/* <label for="name">Name</label> */}
            <input
              name="name"
              class="form-control"
              placeholder="Name"
              value={this.props.name}
              onChange={this.props.handleFormChange}
            />
          </div>
          <div class="form-group">
            {/* <label for="exampleInputEmail1">Email address</label> */}
            <input
              name="email"
              class="form-control"
              placeholder="Email"
              value={this.props.email}
              onChange={this.props.handleFormChange}
            />
          </div>
          <div class="form-group">
            {/* <label for="exampleInputPassword1">Password</label> */}
            <input
              name="password"
              type="password"
              class="form-control"
              placeholder="Password"
              value={this.props.password}
              onChange={this.props.handleFormChange}
            />
          </div>
          <br />
          <div className="form-group">
            <a href="/">
              <button type="submit" class="btn btn-outline-secondary">
                Sign Up
              </button>
            </a>
          </div>
        </form>
      </div>
    );
  }
}
