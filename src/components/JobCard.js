import React, { Component } from "react";

export default class JobCard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="job-card">
          <img className="card-img-top" src=".../100px180/" alt="" />
          <div className="card-body">
            <h5 className="card-title">
              {this.props.job.position}, {this.props.job.company}
            </h5>
            <p>{this.props.job.industry}</p>
            <h5>{this.props.industry}</h5>
            <h5 className="card-title">
              {this.props.job.city}, {this.props.job.state}
            </h5>
            <p className="card-text">{this.props.job.description}</p>
            <h5>
              Get in contact with {this.props.job.my_position} at{" "}
              {this.props.job.company}
            </h5>
            {/* <a href="/editjob" className="btn btn-outline-info">
              Edit
            </a> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
