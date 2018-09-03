import React, { Component } from "react";
import NavBar from "./NavBar";

export default class SeekerEditForm extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <form className="seeker-edit-form">
          {/*Attachment*/}
          <div className="form-group">
            <label for="exampleFormControlFile1">Profile Picture</label>
            <input
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
          <br />
          {/*LinkedIn*/}
          <div className="form-group">
            <label for="exampleFormControlInput1">LinkedIn Url</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="linkedin url"
            />
          </div>
          <br />
          {/*Location*/}
          <label>Current Location</label>
          <div className="form-row">
            <div className="col">
              <input type="text" className="form-control" placeholder="City" />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="State" />
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
                  checked
                />
                <label className="form-check-label" for="gridRadios1">
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
                <label className="form-check-label" for="gridRadios2">
                  No, I do not wish to relocate
                </label>
              </div>
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
              <option value="1">Tech</option>
              <option value="2">Media</option>
              <option value="3">Finance</option>
            </select>
          </div>

          {/*Personal Statement*/}
          <textarea placeholder="personal statement" />
          <br />
          <br />
          {/*Attachment*/}
          <div className="form-group">
            <label for="exampleFormControlFile1">Resume</label>
            <input
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
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
