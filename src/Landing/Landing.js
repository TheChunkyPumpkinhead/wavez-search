import React, { Component } from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';

export default class Landing extends Component {
  
  render() {
  return (


    <main role="main">
        <section className='landing-overlay' >
      <header role="banner">
        <h1>Wavez Search</h1>

      </header>
      <section>
        <header>
          <h3>Sweet spot to document your best spots</h3>
        </header>
        <p>Spot to record your spots!!</p>

      </section>

      <section class="button-section">
        <Link to="/login">
          <button type="button" class="login-button">
            Log in!
     </button>
     </Link>
          <Link to="/signup">
            <button type="button" class="login-button">
              Sign Up!
     </button>
          </Link>
      
       

</section>
</section>
</main>

);
  }
}
