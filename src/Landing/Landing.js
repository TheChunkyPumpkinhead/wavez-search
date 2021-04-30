import React, { Component } from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';

export default class Landing extends Component {
  
  render() {
  return (


    <main role="main">
        <section className='landing-overlay' >
      <header role="banner">
        <h1 className="landing-page-header">Wavez Search</h1>

      </header>
      <section>
        <header>
          <h3>Sweet spot to document your best spots</h3>
        </header>
        <p>Spot to record your spots!! To get started find an existing spot or add a spot within the section Show off that sweet spot by adding an image then content related to the location.</p>

      </section>

      <section className="button-section">
        <Link to="/login">
          <button type="button" className="login-button">
            Log in!
     </button>
     </Link>
          <Link to="/signup">
            <button type="button" className="login-button">
              Sign Up!
     </button>
          </Link>
      
       

</section>
</section>
</main>

);
  }
}
