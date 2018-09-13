import JobCard from "./JobCard";
import React, { Component } from "react";
import NavBar from "./NavBar";

export default class JobPostContainer extends Component {
  state = { job: [] };

  componentDidMount() {
    let config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
      }
    };
    fetch("http://localhost:3000/api/v1/jobs", config)
      .then(res => res.json())
      .then(res =>
        this.setState({
          job: res
        })
      );
    //   .then( res => )
  }

  mapJobPosts = () => {
    let mappedArr = this.state.job.map(job => (
      <JobCard job={job} key={job.id} />
    ));
    return mappedArr;
    // console.log(this.state.job);
  };

  render() {
    return (
      <div>
        <NavBar />
        {this.mapJobPosts()}
      </div>
    );
  }
}
