import React, { Component } from "react";
import { connect } from "react-redux";

const NavBar = props => {
  const handleLogOut = () => {
    localStorage.clear();
    window.location = "http://localhost:4000";
  };

  const userTypeSelection = () => {
    return props.enteredAsSeeker && props.enteredAsInsider === false
      ? "Enter As Insider"
      : "Enter As Seeker";
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/login">
          Change User Type
        </a>

        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/seekerprofile">
                My Profile <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/jobs">
                Jobs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profiles">
                Profiles
              </a>
            </li>
          </ul>
          <div id="log-out-button">
            <button className="nav-link" onClick={handleLogOut} >
              Log Out
              </button>
          </div>
        </div>
      </nav>
    </div >
  );
};

function mapStateToProps(state) {
  return {
    enteredAsSeeker: state.enteredAsSeeker,
    enteredAsInsider: state.enteredAsInsider
  };
}
export default connect(mapStateToProps)(NavBar);
