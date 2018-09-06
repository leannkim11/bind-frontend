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
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">
                Industry
              </label>
            </div>
            <select class="custom-select" id="inputGroupSelect01">
              <option selected>Choose...</option>
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
            <label for="exampleFormControlInput1">Your Position</label>
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
          <button type="button" class="btn btn-outline-info" id="edit-submit">
            Save
          </button>
        </form>
      </div>
    );
  }
}
