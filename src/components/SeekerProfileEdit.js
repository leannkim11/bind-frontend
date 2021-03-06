import React, { Component } from "react";
import NavBar from "./NavBar";
import industry from "./industry";
import { connect } from "react-redux";

class SeekerProfileEdit extends Component {
    state = {
        // mapindustry: industry,
        // industryfield: this.props.user && this.props.user.profile.industry,
        // linkedin: this.props.user && this.props.user.profile.linkedin,
        // city: this.props.user.profile.city,
        // state: this.props.user.profile.state,
        // personalstatement: this.props.user.profile.personalstatement,
        // willing_to_relocate: this.props.user.profile.willing_to_relocate
        mapindustry: industry,
        industryfield: "",
        linkedin: "",
        city: "",
        state: "",
        personal_statement: "",
        willing_to_relocate: ""
    };

    handleSubmit = (e) => {
        e.preventDefault()

        const config = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("jwt")}`
            },
            body: JSON.stringify({
                profile: {
                    user_id: this.props.user.id,
                    linkedin: this.state.linkedin,
                    city: this.state.city,
                    state: this.state.state,
                    personal_statement: this.state.personal_statement,
                    willing_to_relocate: this.state.willing_to_relocate,
                    industry: this.state.industryfield
                }
            })
        }

        this.props.user && fetch(`http://localhost:3000/api/v1/profiles/${this.props.user.profile.id}`, config)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then((window.location = "http://localhost:4000/seekerprofile"));
    }



    mapIndustry = () => {
        let mappedIndustry = this.state.mapindustry.map(i => (
            <option value={i.name} key={i.name}>
                {i.name}
            </option>
        ));
        return mappedIndustry;
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        return (
            <div>
                <NavBar />
                <form className="bind-form" onSubmit={this.handleSubmit}>
                    {/*Attachment*/}
                    <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">Profile Picture</label>

                        <input
                            type="file"
                            className="form-control-file"
                            id="exampleFormControlFile1"
                        />
                    </div>
                    <br />
                    {/*LinkedIn*/}
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">LinkedIn Url</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="linkedin url"
                            name="linkedin"
                            value={this.state.linkedin}
                            onChange={this.handleChange}
                        />
                    </div>
                    <br />
                    {/*Location*/}
                    <label>Current Location</label>
                    <div className="form-row">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="City"
                                name="city"
                                value={this.state.city}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="State"
                                name="state"
                                value={this.state.state}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <br />
                    {/*Radio*/}
                    <div className="row">
                        <legend className="col-form-label col-sm-2 pt-0" >Relocate</legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="willing_to_relocate"
                                    onChange={this.handleChange}
                                    id="gridRadios1"
                                    value={true}
                                />
                                <label className="form-check-label" htmlFor="gridRadios1">
                                    Yes, I am willing to relocate
                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="willing_to_relocate" onChange={this.handleChange}
                                    id="gridRadios2"
                                    value={false}
                                />
                                <label className="form-check-label" htmlFor="gridRadios2">
                                    No, I do not wish to relocate
                </label>
                            </div>
                        </div>
                    </div>
                    <br />
                    {/*Industry*/}
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">
                                Industry
              </label>
                        </div>
                        <select
                            className="custom-select"
                            id="inputGroupSelect01"
                            name="industryfield"
                            onChange={this.handleChange}>
                            {this.mapIndustry()}
                        </select>
                    </div>

                    {/*Personal Statement*/}
                    <textarea
                        placeholder="personal statement"
                        name="personal_statement"
                        value={this.state.personal_statement}
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    {/*Attachment*/}
                    <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">Resume</label>
                        <input
                            type="file"
                            className="form-control-file"
                            id="exampleFormControlFile1"
                        />
                    </div>
                    <br />
                    {/*Button*/}
                    <button type="submit" className="btn btn-outline-info" id="edit-submit">
                        Save
          </button>
                </form>
                {/* {console.log(`http://localhost:3000/api/v1/profiles/${this.props.user.profile.id}`)} */}
                {console.log(this.props)}
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        user: state.user.user
    };
}

export default connect(mapStateToProps)(SeekerProfileEdit)