import React, { Component } from 'react'
import ProfileCard from './ProfileCard'
import NavBar from "./NavBar";
import { connect } from "react-redux";

class ProfilesContainer extends Component {
    componentDidMount() {
        let config = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }
        }
        fetch("http://localhost:3000/api/v1/profiles", config)
            .then(res => res.json())
            .then(data => this.setState({
                profiles: data
            }))
        // .then(data => console.log(data))
    }
    state = {
        profiles: []
    }

    mapProfiles = () => {
        let profilesArr = this.state.profiles.map(u => <ProfileCard profile={u} key={u.id} />)
        return profilesArr
    }

    render() {
        return (
            <div>
                <NavBar />
                {/* {console.log(this.state.profiles)} */}
                {this.mapProfiles()}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        user: state.user.user
    }
}
export default connect(mapStateToProps)(ProfilesContainer)