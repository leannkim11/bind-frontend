import React, { Component } from "react";
import { connect } from "react-redux";

class JobCard extends Component {
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
            <a href={"mailto:" + this.props.job.user.email + "?body=Hi " + this.props.job.user.name + ","}>
              Get in contact with {this.props.job.my_position} at{" "}
              {this.props.job.company}
            </a>
            {console.log(this.props)}
          </div>

        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  }
}
export default connect(mapStateToProps)(JobCard)