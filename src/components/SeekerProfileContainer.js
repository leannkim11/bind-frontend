import React, { Component } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import UserProfile from "./UserProfile";

export default class SeekerProfileContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <SideBar />
        <UserProfile />
      </React.Fragment>
    );
  }
}
