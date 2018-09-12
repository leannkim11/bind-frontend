import React, { Component } from "react";
import NavBar from "./NavBar";
import industry from "./industry";
import { connect } from "react-redux";
import withAuth from "../hoc/withAuth";

class JobForm extends Component {
  state = {
    mapindustry: industry,
    industryfield: "",
    position: "",
    company: "",
    city: "",
    state: "",
    description: "",
    yourPosition: ""
  };

  mapIndustry = () => {
    let mappedIndustry = this.state.mapindustry.map(i => (
      <option value={i.name} key={i.name}>
        {i.name}
      </option>
    ));
    return mappedIndustry;
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  postNew = (event) => {
    event.preventDefault()
    // debugger
    // console.log(this.props.user)
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("jwt")}`
      },
      body: JSON.stringify({
        job: {
          user_id: this.props.user.id,
          position: this.state.position,
          city: this.state.city,
          state: this.state.state,
          industry: this.state.industryfield,
          description: this.state.description,
          my_position: this.state.yourPosition,
          company: this.state.company
        }
      })
    };
    fetch("http://localhost:3000/api/v1/jobs", config)
      .then(res => res.json())
      .then(data => console.log(data))
      .then((window.location = "http://localhost:4000/insiderprofile"));
  };

  render() {
    return (
      <div>
        <NavBar />
        <form className="bind-form" onSubmit={this.postNew}>
          {/*Position*/}
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Position"
                name="position"
                value={this.state.position}
                onChange={this.handleChange}
              />
            </div>
            at
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Company"
                name="company"
                value={this.state.company}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <br />
          {/*Location*/}
          <label>Company Location</label>
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                name="city"
                value={this.state.city}
                onChange={this.handleChange}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="State"
                name="state"
                value={this.state.state}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <br />
          {/*Industry*/}
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Industry
              </label>
            </div>
            <select
              className="custom-select"
              id="inputGroupSelect01"
              value={this.state.industryfield}
              name="industryfield"
              onChange={this.handleChange}>
              <option value="">Choose...</option>
              {/* <option value="hi">hi.</option>
              <option value="hey">hey...</option> */}
              {this.mapIndustry()}
            </select>
          </div>

          {/*Job Description*/}
          <textarea
            placeholder="Job Description"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <br />
          <br />
          {/*My Position*/}
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Your Position</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="your position at the company"
              name="yourPosition"
              value={this.state.yourPosition}
              onChange={this.handleChange}
            />
          </div>
          <br />
          {/*Button*/}
          <button
            type="submit"
            className="btn btn-outline-info"
            id="edit-submit"

          >
            Save
          </button>
        </form>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user
  };
}

export default withAuth(connect(mapStateToProps)(JobForm))