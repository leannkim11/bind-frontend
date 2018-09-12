import React, { Component } from "react";
import { connect } from "react-redux";

const UserProfile = props => {
  const returnName = () => {
    return props.user && props.user.name ? props.user.name : null
  }

  const returnLinkedIn = () => {
    return props.user && props.user.profile.linkedin ? <a href={props.user.profile.linkedin}>LinkedIn</a> : null
  }

  const returnLocation = () => {
    return props.user && props.user.profile.linkedin ? <React.Fragment>{props.user.profile.city}, {props.user.profile.state} <br /> </React.Fragment> : null
  }

  const returnIndustry = () => {
    return props.user && props.user.profile.linkedin ? props.user.profile.industry : null
  }

  return (
    <div className="user-profile">
      <img src="./avatar.png" id="profile-pic" alt="..." />
      <br /><br />
      <h5>Name: {returnName()} </h5>
      <br />
      {/* <p>LinkedIn: </p> */}
      {/* {props.user.profile.linkedin} */}
      {returnLinkedIn()}
      <br />
      <p>Current Location: {returnLocation()}</p>
      <br />
      <p>Industry: {returnIndustry()}</p>
      <br />
      <a href="./seekeredit" className="btn btn-outline-info">

        Edit
        </a>
    </div>
  );

}

const mapStateToProps = state => {
  return {
    user: state.user.user
  }
}
export default connect(mapStateToProps)(UserProfile)