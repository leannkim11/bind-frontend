import React, { Component } from "react";

export default class JobCard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="card">
          <img className="card-img-top" src=".../100px180/" alt="" />
          <div className="card-body">
            <h5 className="card-title">Job Post</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <a href="/editjob" className="btn btn-outline-info">
              Edit
            </a>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src=".../100px180/" alt="" />
          <div className="card-body">
            <h5 className="card-title">Job Post</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <a href="/editjob" className="btn btn-outline-info">
              Edit
            </a>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src=".../100px180/" alt="" />
          <div className="card-body">
            <h5 className="card-title">Job Post</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <a href="/editjob" className="btn btn-outline-info">
              Edit
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
