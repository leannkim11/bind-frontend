import React, { Component } from "react";

export default class UserTypeCard extends Component {
  render() {
    // console.log(this.props);

    return (
      <div>
        <div className="row">
          <div className="col-sm-6">
            <div className="card" id="leftcard">
              <img src="./teamwork.png" alt="" className="card-image" />
              <br />
              <div className="card-body">
                <h4 className="card-title">Enter as Seeker</h4>
                <p className="card-text">
                  Get in touch with Insiders and view job opportunities
                </p>
                <br />
                <button
                  className="btn btn-outline-secondary"
                  id="seeker-button"
                  onClick={() => {
                    window.location = "http://localhost:4000/seekerprofile";
                  }}
                >
                  Start Networking
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card" id="rightcard">
              <img src="./recruitment.png" alt="" className="card-image" />
              <br />
              <div className="card-body">
                <h4 className="card-title">Enter as Insider</h4>
                <p className="card-text">
                  Share job opportunities with qualified job seekers and get
                  your referral fee from your company
                </p>
                <br />

                <button
                  // href="/insiderprofile"
                  className="btn btn-outline-secondary"
                  id="insider-button"
                  onClick={() => {
                    window.location = "http://localhost:4000/insiderprofile";
                  }}
                >
                  Get Referral Fee
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
