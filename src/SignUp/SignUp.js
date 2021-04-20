import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

export default function SignUp(props) {
  return (

<main>
      
 
     
     
      



  
    
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
        <Link to="/login">
        <button type='submit'>Log In</button>
        </Link>
      </section>
      </main>
      



     
      

);
}