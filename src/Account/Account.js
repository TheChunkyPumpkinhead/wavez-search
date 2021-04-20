import React from 'react';
import { Link } from 'react-router-dom';
import './Account.css';
// import { Link } from 'react-router-dom';

export default function Account(props) {
  return (
 
  
    
    <main role="main">
        <header role="banner">
        <Link to = '/'>  
        <button className='login-button' type='submit'>
              Home
              </button>
              </Link>
        <h1>Accounts</h1>
      
      </header>
      <section>
       
        <form class='signup-form'>
           
         
        <p>Waves Info</p>
        <button type='submit'>delete</button>
        </form>
      </section>
      <section>
        <header>
              
        </header>
        <p>Waves Info</p>
        <button type='submit'>delete</button>
      </section>
     
       
</main>

);
}


