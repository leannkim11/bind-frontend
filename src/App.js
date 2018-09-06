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
/////

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header" />
        </div>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/login" component={LogInForm} />
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
            <Route exact path="/postjob" component={JobForm} />
            <Route exact path="/editjob" component={JobForm} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
