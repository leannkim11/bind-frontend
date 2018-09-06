import React, { Component } from "react";

export default class SignUpForm extends Component {
  render() {
    return (
      <div>
        <img src="./bind.jpeg" alt="" id="mainlogo" className="center" />
        <form id="sign-up-form" action="/">
          <h3>Sign Up Below!</h3>
          <div class="form-group">
            <label for="name">Name</label>
            <input
              col-5
              type="text"
              class="form-control"
              id="exampleInputName"
              placeholder="Name"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              col-5
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              col-5
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <a href="/">
            <button type="submit" class="btn btn-primary">
              Sign Up
            </button>
          </a>
        </form>
      </div>
    );
  }
}
