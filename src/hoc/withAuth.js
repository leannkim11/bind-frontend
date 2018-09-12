import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import * as actions from "../actions";

const withAuth = WrappedComponent => {
  class AuthorizedComponent extends React.Component {
    componentDidMount() {
      if (localStorage.getItem("jwt") && !this.props.loggedIn)
        this.props.fetchCurrentUser();
    }

    render() {
      // console.log('withAuth', this.props, localStorage.getItem("jwt"), this.props.loggedIn);
      if (localStorage.getItem("jwt") && this.props.loggedIn) {
        // console.log('withAuth Loop?');
        return <WrappedComponent />;
        //   } else if (localStorage.getItem("jwt") && this.props.authenticatingUser) {
        //     return <Loader active inline="centered" />;
      } else {
        // console.log('withAuth Redirect?');
        return <Redirect to="/login" />;
      }
    }
  }

  return connect(
    mapStateToProps,
    actions
  )(AuthorizedComponent);
};

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  authenticatingUser: state.user.authenticatingUser
});

export default withAuth;
