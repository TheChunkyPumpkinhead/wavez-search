import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

export default function Login(props) {
  return (



<main role="main">
      <header role="banner">
        <h1>Log In</h1>
      
      </header>
      <section>
        <header>
            <h3>Create an Account</h3>
        </header>
        <form class='signup-form'>
           
            <div>
              <label for="username">Username</label>
              <input type="text" name='username' id='username' />
            </div>
            <div>
              <label for="password">Password</label>
              <input type="password" name='password' id='password' />
            </div>
            <button type='submit'>Log in</button>
        </form>
      </section>
              
     
        <p>No Account?</p>
        <Link to="/signup">
        <button type='submit'>Sign Up</button>
        </Link>
   </main>





   
       

);
}
