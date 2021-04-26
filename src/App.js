import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing/Landing';
import LogIn from './Login/Login';
import SignUp from './SignUp/SignUp';
import SiteList from './SiteList/SiteList';
import Account from './Account/Account';
import NavBar from './NavBar/NavBar';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">

        <BrowserRouter>
          <NavBar />
          <Switch>

            <Route exact path='/' component={Landing} />
            <Route path='/list' component={SiteList} />
            <Route path='/login' component={LogIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/account' component={Account} />

          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}
export default App;