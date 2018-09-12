import React, { Component } from "react";
//////CSS/////////////
import "./App.css";
////////REDUX/////////
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from './actions'

////MY COMPONENTS//////
import Homepage from "./components/Homepage";
import LogInForm from "./components/LogInForm";
import SignUpForm from "./components/SignUpForm";
import UserTypeCard from "./components/UserTypeCard";
import SeekerProfileContainer from "./components/SeekerProfileContainer";
import InsiderProfileContainer from "./components/InsiderProfileContainer";
import SeekerProfileForm from "./components/SeekerProfileForm";
import JobForm from "./components/JobForm";
import JobPostContainer from "./components/JobPostContainer";
import SeekerProfileEdit from './components/SeekerProfileEdit'
/////

class App extends Component {

  componentDidMount() {
    this.props.fetchCurrentUser()
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/login" component={LogInForm} />
            <Route exact path="/selectuser" component={UserTypeCard} />
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

                />
              )}
            />
            <Route
              exact
              path="/seekerprofile"
              render={renderprops => (
                <SeekerProfileContainer />
              )}
            />
            <Route
              exact
              path="/insiderprofile"
              render={renderprops => (
                <InsiderProfileContainer />
              )}
            />
            <Route exact path="/seekeredit" component={SeekerProfileEdit} />
            <Route
              exact
              path="/postjob"
              render={renderprops => (
                <JobForm />
              )}
            />
            <Route exact path="/editjob" component={JobForm} />
            <Route exact path="/seekerprofileform" component={SeekerProfileForm} />
            <Route exact path="/jobs" component={JobPostContainer} />
          </Switch>
        </Router>
      </div>
    );
  }
}


export default connect(null, actions)(App)
