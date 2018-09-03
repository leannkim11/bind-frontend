import React, { Component } from "react";
import Search from "./Search";
import Bookmark from "./Bookmark";

export default class SideBar extends Component {
  render() {
    return (
      <div className="container" id="seeker-sidebar">
        <div className="form-group row">
          <label for="staticEmail" className="col-sm-2 col-form-label">
            Industry
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              readonly
              className="form-control-plaintext"
              id="staticEmail"
              value="Industry Placeholder"
            />
          </div>
        </div>
        <Search />
        <Bookmark />
      </div>
    );
  }
}
