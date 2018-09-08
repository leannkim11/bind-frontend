import React, { Component } from "react";

export default class NavBar extends Component {
  handleLogOut = () => {
    localStorage.clear();
    window.location = "http://localhost:4000";
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/loggedin">
            Switch User Type
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
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
                <a className="nav-link" href="#">
                  Jobs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Message
                </a>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={this.handleLogOut}>
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
