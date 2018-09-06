import React, { Component } from "react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import JobCard from "./JobCard";
export default class InsiderProfileContainer extends Component {
  componentWillMount() {
    console.log("123");
  }

  render() {
    return (
      <div>
        <NavBar />
        <SideBar />
        <div class="card-deck">
          <JobCard />

          <div className="post-new">
            <a href="/postjob" className="btn btn-outline-info">
              POST NEW
            </a>
          </div>
        </div>
      </div>
    );
  }
}
