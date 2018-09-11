import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { withRouter, Redirect } from "react-router";
import { loginUser } from "../actions/user";
import { connect } from "react-redux";

class LogInForm extends Component {
  handleFormSubmit = e => {
    e.preventDefault();
    this.props.loginUser(
      this.state.email,
      this.state.password,
      this.props.history
    );
  };

  state = {
    email: "",
    password: ""
  };

  handleFormChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    // console.log(this.state);
    return this.props.loggedIn ? (
      <Redirect to="/selectuser" />
    ) : (
        <React.Fragment>
          <form
            id="sign-up-form"
            action="/loggedin"
            onSubmit={this.handleFormSubmit}
            loading={this.props.authenticatingUser.toString()}
            error={this.props.failedLogin.toString()}
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
              {/* {console.log(this.props.user)} */}
            </div>
          </form>
        </React.Fragment>
      );
  }
}

const mapStateToProps = state => {
  return {
    authenticatingUser: state.user.authenticatingUser,
    failedLogin: state.user.failedLogin,
    error: state.user.error,
    user: state.user.user,
    loggedIn: state.user.loggedIn
  };

  // console.log(state);
};

const mapDispatchToProps = dispatch => ({
  loginUser: bindActionCreators(loginUser, dispatch)
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LogInForm)
);
