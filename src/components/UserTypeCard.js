import React, { Component } from "react";

export default class UserTypeCard extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-6">
            <div className="card" id="leftcard">
              <img src="./teamwork.png" alt="" className="card-image" />
              <div className="card-body">
                <h4 className="card-title">Enter as Seeker</h4>
                <p className="card-text">
                  Get in touch with Insiders and view job opportunities
                </p>
                <br />
                <a href="/seekerprofile" className="btn btn-outline-info">
                  Start Networking
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card" id="rightcard">
              <img src="./recruitment.png" alt="" className="card-image" />
              <div className="card-body">
                <h4 className="card-title">Enter as Insider</h4>
                <p className="card-text">
                  Share job opportunities with qualified job seekers and get
                  your referral fee from your company
                </p>
                <br />

                <a href="/insiderprofile" className="btn btn-outline-info">
                  Get Referral Fee
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
