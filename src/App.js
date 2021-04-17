
import React from 'react';
import { Route,Link} from 'react-router-dom';
import './App.css';
import AccountPage from './AccountPage/AccountPage';
import LandingPage from './LandingPage/LandingPage';
import Login from "./Login/Login";
import SiteList from './SiteList/SiteList';
import SignUp from './SignUp/SignUp';

function App() {
  return (
    <div className="App">
    <header className ='App header'>
    <nav>
          <ul>

          <li>
            <Link to="/">home</Link>
            </li>
            <li>
            <Link to="/add">Add</Link>
            </li>
            <li>
            <Link to="/list">list</Link>
            </li>
            <li>
            <Link to="/contact">contact</Link>
            </li>
            <li>
            <Link to="/new">New</Link>
            </li>
          </ul>
        </nav>

      </header>

      <main>
        <Route path ="/" exact component ={LandingPage} /> 
        <Route path="/contact" component={Login} />
        <Route path="/add" component={SiteList} />
        <Route path="/list" component={AccountPage} /> 
        <Route path="/new" component={SignUp} /> 


         </main>
    </div>
  );
}

export default App;