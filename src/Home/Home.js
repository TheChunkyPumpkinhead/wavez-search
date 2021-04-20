import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home(props) {
  return (


    <main role="main">
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
          <button type="button">
            Log in!
     </button>
     </Link>
          <Link to="/signup">
            <button type="button">
              Sign Up!
     </button>
          </Link>
      
       

</section>
</main>







);
}
