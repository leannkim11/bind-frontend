import React, { Component } from "react";

export default class JobCard extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="card">
          <img class="card-img-top" src=".../100px180/" alt="" />
          <div class="card-body">
            <h5 class="card-title">Job Post</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src=".../100px180/" alt="" />
          <div class="card-body">
            <h5 class="card-title">Job Post</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src=".../100px180/" alt="" />
          <div class="card-body">
            <h5 class="card-title">Job Post</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
