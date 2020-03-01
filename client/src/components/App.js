import React, { Component } from "react";
import AppBar from "./AppBar";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as sessionOperations from "../redux/session/sessionOperations";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home";
import About from "../pages/About";
import Account from "../pages/Account";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

class App extends Component {
  componentDidMount() {
    this.props.refreshUser();
  }
  render() {
    return (
      <div>
        <AppBar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <ProtectedRoute
            path="/account"
            component={Account}
            redirectTo="/login"
          />
          <ProtectedRoute
            path="/dashboard"
            component={Dashboard}
            redirectTo="/login"
          />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = {
  refreshUser: sessionOperations.refreshUser
};

export default connect(null, mapDispatchToProps)(App);
