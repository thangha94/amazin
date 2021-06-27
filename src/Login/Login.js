import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import LogoBlack from '../images/amazon-logo-black.png';
import './Login.scss';
const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = (e) => {
    e.preventDefault();

    // some fancy login
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
      })
      .catch((error) => console.log(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created new user with email and password
        console.log(auth);
        if (auth) {
          history.push('/');
        }
      })
      .catch((error) => console.log(error.message));
    //   Do some fancy firebase register
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={LogoBlack} alt="" />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name=""
            id=""
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name=""
            id=""
          />
          <button type="submit" onClick={signIn} className="login__signin-btn">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice
        </p>
        <button onClick={register} className="login__register-btn">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
