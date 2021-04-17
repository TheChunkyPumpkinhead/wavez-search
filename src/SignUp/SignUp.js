import React from 'react';
import './SignUp.css';
// import { Link } from 'react-router-dom';

export default function SignUp(props) {
  return (

<main>
      
      
      <button className='login-button' type='submit'>
              Sign Up
              </button>
                <button className='login-button' type='submit'>
              Home
              </button>
     
     
      



  
    
      <header role="banner">
        <h1>Sign Up</h1>
      
      </header>
      <section>
       
        <form class='signup-form'>
           
            <div>
              <label for="username">Username</label>
              <input type="text" name='username' id='username' />
            </div>
            <div>
              <label for="password">Password</label>
              <input type="password" name='password' id='password' />
            </div>
            <button type='submit'>Sign Up</button>
        </form>
      </section>
              n
    <section>
        <p>No Account?</p>
        <button type='submit'>Sign Up</button>
      </section>
      </main>
      



     
      

);
}