import React, { Component } from "react";
//////CSS/////////////
import "./App.css";
////////REDUX/////////
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

////MY COMPONENTS//////
import Homepage from "./components/Homepage";
import LogInForm from "./components/LogInForm";
import SignUpForm from "./components/SignUpForm";
import UserTypeCard from "./components/UserTypeCard";
import SeekerProfileContainer from "./components/SeekerProfileContainer";
import InsiderProfileContainer from "./components/InsiderProfileContainer";
import SeekerEditForm from "./components/SeekerEditForm";
import JobForm from "./components/JobForm";
import MainPage from "./components/MainPage";
/////

class App extends Component {
  state = {
    name: "",
    currentUser: "",
    userType: ""
  };

  //////////LogIn & Sign Up Form //////////////
  handleFormChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  //////////Change User Type////////////////
  userTypeSeeker = () => {
    this.setState({
      userType: "Seeker"
    });
    window.location = "http://localhost:4000/seekerprofile";
  };

  userTypeInsider = () => {
    this.setState({
      userType: "Insider"
    });
    window.location = "http://localhost:4000/insiderprofile";
  };

  //////////////FETCH -- LOG IN////////////////
  // componentDidMount() {
  //   // debugger;
  //   const token = localStorage.getItem("jwt");
  //   const currentUserFetchObj = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`
  //     }
  //   };
  //   fetch("http://localhost:3000/api/v1/loggedin", currentUserFetchObj)
  //     .then(res => res.json())
  //     .then(data => console.log(data));
  // .then(data => localStorage.setItem("jwt", data));
  // .then(data =>
  //   this.setState({
  //     currentUser: data
  //   })
  // );
  // .then(data => console.log(this.state.currentUser));
  // }
  ///////SET CURRENTUSER////////
  setCurrentUser = res => {
    this.setState({
      currentUser: res
    });
  };

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/login" component={MainPage} />
            <Route
              exact
              path="/login"
              render={renderprops => <UserTypeCard />}
            />
            <Route
              exact
              path="/signup"
              render={rendorprops => (
                <SignUpForm
                  name={this.state.name}
                  email={this.state.email}
                  password={this.state.password}
                  handleFormChange={this.handleFormChange}
                />
              )}
            />
            <Route
              exact
              path="/seekerprofile"
              render={renderprops => (
                <SeekerProfileContainer userType={this.state.userType} />
              )}
            />
            <Route
              exact
              path="/insiderprofile"
              render={renderprops => (
                <InsiderProfileContainer userType={this.state.userType} />
              )}
            />
            <Route exact path="/seekeredit" component={SeekerEditForm} />
            <Route
              exact
              path="/postjob"
              render={renderprops => (
                <JobForm currentUser={this.state.currentUser} />
              )}
            />
            <Route exact path="/editjob" component={JobForm} />
          </Switch>
        </Router>
        {/* {console.log(this.state.currentUser)} */}
      </div>
    );
  }
}

export default App;
