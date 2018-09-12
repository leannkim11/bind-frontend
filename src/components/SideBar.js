import React, { Component } from "react";
import Search from "./Search";
import Bookmark from "./Bookmark";

export default class SideBar extends Component {
  render() {
    return (
      <div className="container" id="seeker-sidebar">
        <Search />
        {/* <Bookmark /> */}
        <p>Search Results</p>
      </div>
    );
  }
}
