import React, { Component } from "react";
import BookmarkedItem from "./BookmarkedItem";

export default class Bookmark extends Component {
  render() {
    return (
      <div>
        <div className="list-group">
          <label>Bookmark</label>
          <BookmarkedItem />
        </div>
      </div>
    );
  }
}
