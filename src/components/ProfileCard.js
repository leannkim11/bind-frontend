import React, { Component } from 'react'
import { connect } from "react-redux";

class ProfileCard extends Component {

    grabEmail = () => {
        this.props.user && this.props.user.email
    }

    render() {
        return (
            <div>

                <div className="job-card">
                    <img className="card-img-top" src=".../100px180/" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">
                            Looking for a position in {this.props.profile.industry}
                        </h5>
                        <p>Currently located in {this.props.profile.city}, {this.props.profile.state}</p>

                        <a href={this.props.profile.linkedin}>LinkedIn</a>
                        <br />
                        <p className="card-text">{this.props.profile.personal_statement}</p>
                        <a href={"mailto:" + this.grabEmail() + "?subject=FromBind &body=Hi " + this.props.profile.name + ","}>
                            Share your inside information to win referral fee
                            </a>
                        {/* {console.log(this.props.allprofiles)} */}
                        {/* <h5>{this.findUserEmail(this.props.profile.profile.profile_id)}</h5> */}
                        {console.log(this.props)}
                    </div>

                </div>

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        user: state.user.user
    }
}

export default connect(mapStateToProps)(ProfileCard)