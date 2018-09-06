import React, { Component } from "react";

export default class UserProfile extends Component {
  render() {
    return (
      <div className="user-profile">
        <img src="./avatar.png" id="profile-pic" alt="..." />
        <h5>Name</h5>
        <p>LinkedIn: </p>
        <p>Current Location: </p>
        <p>Industry: </p>
        <a href="./seekeredit" className="btn btn-outline-info">
          Edit
        </a>
      </div>
    );
  }
}
