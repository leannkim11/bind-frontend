import React, { Component } from "react";
import Search from "./Search";
import NavBar from "./NavBar";
import JobCard from "./JobCard";
import { connect } from "react-redux";
import { withRouter } from 'react-router'


const InsiderProfileContainer = props => {
  const redirect = () => {
    props.history.push("/postjob")
  }

  // const deletePost = (e) => {

  //   fetch(`http://localhost:3000/api/v1/jobs/${e.target.value}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
  //       "Content-Type": "application/json"
  //     }
  //   })
  //     .then(res => res.json())

  // }

  const renderMyPosts = () => {
    // console.log(props.user)
    let myjobsarr = props.user && props.user.jobs.map((job) =>
      (<div key={job.id} className="job-card">
        <img className="card-img-top" src=".../100px180/" alt="" />
        <div className="card-body">
          <h5 className="card-title">
            {job.position}, {job.company}
          </h5>
          <h5>{job.industry}</h5>
          <h5 className="card-title">
            {job.city}, {job.state}
          </h5>
          <p className="card-text">{job.description}</p>
        </div>
        <button
          value={job.id}
          className="delete-job"
        // onClick={deletePost} 
        >delete</button>
      </div>))
    return myjobsarr
  }


  return (
    <div>
      <NavBar />

      <Search />
      <div className="post-new">
        <button className="btn btn-outline-info"
          onClick={redirect}
        >
          POST NEW
            </button>
      </div>
      <div className="card-deck">
        {/* <JobCard /> */}
        {renderMyPosts()}

        {/* {console.log(props)} */}

      </div>
      {/* {console.log(props.user)} */}
    </div>
  );

}

function mapStateToProps(state) {
  return {
    user: state.user.user
  };
}

export default withRouter(connect(mapStateToProps)(InsiderProfileContainer))