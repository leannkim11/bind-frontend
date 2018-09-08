import React, { Component } from "react";
import NavBar from "./NavBar";
import industry from "./industry";

export default class JobForm extends Component {
  state = {
    industry: industry,
    position: "",
    company: "",
    city: "",
    state: "",
    description: "",
    yourPosition: ""
  };

  mapIndustry = () => {
    let mappedIndustry = this.state.industry.map(i => (
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

  postNew = () => {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        user_id: this.props.currentUser["id"],
        position: this.state.position,
        city: this.state.city,
        state: this.state.state,
        industry: this.state.industry,
        desription: this.state.description,
        my_position: this.state.yourPosition,
        company: this.state.company
      }
    };
    fetch("http://localhost:3000/api/v1/jobs", config)
      .then(res => res.json())
      .then(data => console.log(data));
  };

  render() {
    return (
      <div>
        <NavBar />
        <form className="bind-form">
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
            <select className="custom-select" id="inputGroupSelect01">
              <option value="">Choose...</option>
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
            type="button"
            className="btn btn-outline-info"
            id="edit-submit"
            onClick={this.postNew}
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}
