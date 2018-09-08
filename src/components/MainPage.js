import React, { Component } from "react";
import UserTypeCard from "./UserTypeCard";
import LogInForm from "./LogInForm";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchCurrentUser } from "../actions/user";

class MainPage extends Component {
  componentDidMount() {
    this.props.fetchCurrentUser();
  }
  render() {
    console.log(this.props);
    return <div>{localStorage.jwt ? <UserTypeCard /> : <LogInForm />}</div>;
  }
}

const mapStateToProps = state => {
  return { loggedIn: state.user.loggedIn };
};
export default connect(
  mapStateToProps,
  { fetchCurrentUser }
)(withRouter(MainPage));
