import React, { Component } from "react";
import { connect } from "react-redux";

class Search extends Component {

  // componentDidMount() {
  //   let config = {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${localStorage.getItem("jwt")}`
  //     }
  //   }
  //   fetch("http://localhost:3000/api/v1/profiles", config)
  //     .then(res => res.json())
  //     .then(data =>
  //       this.setState({
  //         profiles: data
  //       }))

  //   fetch("http://localhost:3000/api/v1/jobs", config)
  //     .then(res => res.json())
  //     .then(data =>
  //       this.setState({
  //         jobPosts: data
  //       })
  //     );
  // }

  // state = {
  //   searchTerm: "",
  //   jobPosts: [],
  //   profiles: []
  // }


  render() {
    return (
      // <div className="container" id="seeker-sidebar">
      //   <div>
      //     <div className="input-group input-group-sm mb-3">
      //       <div className="input-group-prepend">
      //         <span className="input-group-text" id="inputGroup-sizing-sm">
      //           Search by Industry
      //       </span>
      //       </div>
      //       <input
      //         type="text"
      //         className="form-control"
      //         aria-label="Sizing example input"
      //         aria-describedby="inputGroup-sizing-sm"
      //         value={this.props.searchTerm}
      //         onChange={this.props.handleChange}
      //       />
      //     </div>
      //   </div>
      //   {/* <p>Search Results</p> */}
      // </div>
      <form>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">Search by Industry</span>
          </div>
          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={this.props.searchTerm} onChange={this.props.handleChange} />
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user
  }
}

export default connect(mapStateToProps)(Search)