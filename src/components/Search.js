import React, { Component } from "react";
import { connect } from "react-redux";

class Search extends Component {

  state = { searchTerm: "" }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }
  render() {
    return (
      <div className="container" id="seeker-sidebar">
        <div>
          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Search
            </span>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              value={this.state.searchTerm}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <p>Search Results</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user
  }
}

export default connect(mapStateToProps)(Search)