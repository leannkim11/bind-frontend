import React, { Component } from "react";
import NavBar from "./NavBar";
import industry from "./industry";

export default class SeekerEditForm extends Component {
  state = {
    industry: industry,
    linkedin: "",
    city: "",
    state: "",
    personalstatement: ""
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
          {/*Attachment*/}
          <div className="form-group">
            <label htmlFor="exampleFormControlFile1">Profile Picture</label>

            <input
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
          <br />
          {/*LinkedIn*/}
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">LinkedIn Url</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="linkedin url"
              name="linkedin"
              value={this.state.linkedin}
              onChange={this.handleChange}
            />
          </div>
          <br />
          {/*Location*/}
          <label>Current Location</label>
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
          {/*Radio*/}
          <div className="row">
            <legend className="col-form-label col-sm-2 pt-0">Relocate</legend>
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios1"
                  value="option1"

                />
                <label className="form-check-label" htmlFor="gridRadios1">
                  Yes, I am willing to relocate
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="gridRadios2">
                  No, I do not wish to relocate
                </label>
              </div>
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
              {this.mapIndustry()}
            </select>
          </div>

          {/*Personal Statement*/}
          <textarea
            placeholder="personal statement"
            name="personalStatement"
            value={this.state.personalStatement}
            onChange={this.handleChange}
          />
          <br />
          <br />
          {/*Attachment*/}
          <div className="form-group">
            <label htmlFor="exampleFormControlFile1">Resume</label>
            <input
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
          <br />
          {/*Button*/}
          <button type="button" className="btn btn-outline-info" id="edit-submit">
            Save
          </button>
        </form>
      </div>
    );
  }
}
