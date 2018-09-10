import JobCard from "./JobCard";
import React, { Component } from "react";

export default class JobPostContainer extends Component {
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
      .then(res => console.log(res));
    //   .then( res => )
  }

  state = { job: [] };
  render() {
    return <div />;
  }
}
