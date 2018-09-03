import React, { Component } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
////MY COMPONENTS//////
import LogInForm from "./components/LogInForm";
import SignUpForm from "./components/SignUpForm";
import UserTypeCard from "./components/UserTypeCard";
import SeekerProfileContainer from "./components/SeekerProfileContainer";
import InsiderProfileContainer from "./components/InsiderProfileContainer";
import SeekerEditForm from "./components/SeekerEditForm";
/////

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header" />
        </div>
        <Router>
          <React.Fragment>
            <Route exact path="/" component={LogInForm} />
            <Route exact path="/loggedin" component={UserTypeCard} />
            <Route exact path="/signup" component={SignUpForm} />
            <Route
              exact
              path="/seekerprofile"
              component={SeekerProfileContainer}
            />
            <Route
              exact
              path="/insiderprofile"
              component={InsiderProfileContainer}
            />
            <Route exact path="/seekeredit" component={SeekerEditForm} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
