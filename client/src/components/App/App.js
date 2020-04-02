import React, { Component } from 'react';
import AppBar from '../AppBar/AppBar';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Account from '../../pages/Account';
import Gallery from '../../pages/Gallery';
import Login from '../../pages/Login';
import SignUp from '../../pages/SignUp';
import styles from './app.module.css';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <AppBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/account" component={Account} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
