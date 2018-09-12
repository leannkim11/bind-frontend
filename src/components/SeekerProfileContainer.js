import React, { Component } from "react";
import NavBar from "./NavBar";
import Search from "./Search";
import UserProfile from "./UserProfile";

export default class SeekerProfileContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Search />
        <UserProfile />
      </React.Fragment>
    );
  }
}
