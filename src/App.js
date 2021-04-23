
import React from 'react';
import { Route,Link} from 'react-router-dom';
import './App.css';
import Account from './Account/Account';
import Home from './Home/Home';
import Login from "./Login/Login";
import Notes from './WavesForm/WavesForm';
import SignUp from './SignUp/SignUp';

function App() {
  return (
    <div className="App">
    <header className ='App header'>
    <nav>
          <ul>

          <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/login">Login</Link>
            </li>
            <li>
            <Link to="/signup">Sign Up</Link>
            </li>
            <li>
            <Link to="/notes">Notes</Link>
            </li>
            <li>
            <Link to="/account">Account</Link>
            </li>
            
          </ul>
        </nav>

      </header>

      <main>
        <Route path ="/" exact component ={Home} /> 
        <Route path="/login" component={Login} />
        <Route path="/notes" component={Notes} />
        <Route path="/account" component={Account} /> 
        <Route path="/signup" component={SignUp} /> 


         </main>
    </div>
  );
}

export default App;