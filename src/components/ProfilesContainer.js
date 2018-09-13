import React, { Component } from 'react'
import ProfileCard from './ProfileCard'
import NavBar from "./NavBar";
import Search from './Search'
import { connect } from "react-redux";

class ProfilesContainer extends Component {
    state = {
        profiles: [],
        allProfiles: [],
        searchTerm: ""
    }

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
                profiles: data,
                allProfiles: data
            }))
        // .then(data => console.log(data))
    }


    mapProfiles = () => {
        let profilesArr = this.state.profiles.map(p => <ProfileCard profile={p} key={p.id} />)
        return profilesArr
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        }, () => this.handleFilter())
    }

    handleFilter = () => {
        let filtered = this.state.allProfiles.filter(p => p.industry ? p.industry.toLowerCase().includes(this.state.searchTerm.toLowerCase()) : "");
        this.setState({
            profiles: filtered
        })
        // this.state.allProfiles.filter(p => console.log(p.industry))
    }

    render() {
        return (
            <div>
                <NavBar />
                <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
                {/* {console.log(this.state.profiles)} */}
                <div className="profile-content">
                    {this.mapProfiles()}
                </div>
                {console.log(this.state.allProfiles)}
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