import { withRouter } from "react-router";
import { connect } from "react-redux";
import { setSeeker, setInsider } from "../actions/index";
import React, { Component } from "react";

const UserTypeCard = props => {
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
                  props.setSeeker();
                  props.history.push("/seekerprofile");
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
                Share job opportunities with qualified job seekers and get your
                referral fee from your company
              </p>
              <br />

              <button
                // href="/insiderprofile"
                className="btn btn-outline-secondary"
                id="insider-button"
                onClick={() => {
                  props.setInsider();
                  props.history.push("/insiderprofile");
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
};

function mapStateToProps(state) {
  return {
    enteredAsSeeker: state.enteredAsSeeker,
    enteredAsInsider: state.enteredAsInsider
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSeeker: () => dispatch(setSeeker()),
    setInsider: () => dispatch(setInsider())
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserTypeCard)
);
