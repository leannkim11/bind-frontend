import React, { Component } from "react";
import Search from "./Search";
import NavBar from "./NavBar";
import JobCard from "./JobCard";
import { connect } from "react-redux";
import { withRouter } from 'react-router'
import { deleteJobPost } from '../actions/index'
import { bindActionCreators } from "redux";

class InsiderProfileContainer extends Component {


  componentDidMount() {

  }

  redirect = () => {
    this.props.history.push("/postjob")
  }

  deletePost = (e, dispatch) => {

    e.preventDefault()

    let event = e.target.value

    fetch(`http://localhost:3000/api/v1/jobs/${e.target.value}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((json) => {


        // get state of posts set it to new variable- x
        let jobarr = this.props.user.jobs
        let newJobArr = jobarr.filter(job => job.id !== parseInt(event))
        this.dispatchDelete(newJobArr)
        //find the deleted element index from x
        //delete elelemnt using splice
        // send action payload with updated x
      })
      .then(window.location.reload())

  }

  dispatchDelete = (newJobArr) => {
    this.props.deleteJobPost(newJobArr)
  }

  renderMyPosts = () => {
    // console.log(props.user)
    let myjobsarr = this.props.user && this.props.user.jobs.map((job) =>
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
          onClick={this.deletePost}
        >delete</button>
      </div>))
    return myjobsarr
  }

  render() {

    return (
      <div>
        <NavBar />

        <Search />
        <div className="post-new">
          <button className="btn btn-outline-info"
            onClick={this.redirect}
          >
            POST NEW
            </button>
        </div>
        <div className="card-deck">
          {/* <JobCard /> */}
          {this.renderMyPosts()}

          {/* {console.log(props)} */}

        </div>
        {/* {console.log(props.user)} */}
      </div >
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  };
}

const mapDispatchToProps = dispatch => ({
  deleteJobPost: bindActionCreators(deleteJobPost, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InsiderProfileContainer))