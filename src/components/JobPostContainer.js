import JobCard from "./JobCard";
import React, { Component } from "react";
import NavBar from "./NavBar";
import Search from './Search'

export default class JobPostContainer extends Component {
  state = {
    job: [],
    allJob: [],
    searchTerm: ""
  };

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
          job: res,
          allJob: res
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

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    }, () => this.handleFilter())
  }

  handleFilter = () => {
    // let filtered = this.state.allJob.filter(j => j.industry ? j.industry.toLowerCase().includes(this.state.searchTerm.toLowerCase()) : "");
    // this.setState({
    //   profiles: filtered
    // })
    // this.state.allProfiles.filter(p => console.log(p.industry))
    this.state.allJob.filter(j => console.log(j.industry))
  }

  render() {
    return (
      <div>
        <NavBar />
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
        {this.mapJobPosts()}
      </div>
    );
  }
}
