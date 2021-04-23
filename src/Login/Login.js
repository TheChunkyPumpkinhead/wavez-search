import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import AuthApiService from '../Services/auth-api-service';


class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      params: {
        loginUsername: '',
        loginPassword: '',
      },
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { loginUsername, loginPassword } = event.target;

    AuthApiService.postLogin({
      email: loginUsername.value,
      password: loginPassword.value,
    })

      .then(res => {
        TokenService.saveAuthtoken(res.authToken);
        TokenService.saveUserId(res.userId);
        loginUsername.value = '';
        loginPassword.value = '';
        window.location = '/list';
      })
      .catch(err => {
        console.log(err);
      });
  };

  validateLoginUsername(inputEmail) {
    let outputEmail = inputEmail;
    let mailformat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/;

    if (!inputEmail.match(mailformat)) {
      outputEmail = '';
    }
    return outputEmail;
  }
  validateLoginPassword(inputLoginPassword) {
    let outputLoginPassword = inputLoginPassword;
    let loginPasswordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;

    if (!inputLoginPassword.match(loginPasswordFormat)) {
      outputLoginPassword = '';
    }
    return outputLoginPassword;
  }

  render() {
    const errorMessage = this.state.error ? (
      <p className='error-message'>{this.state.error}</p>) : (false);



return(

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

}

export default LogIn;