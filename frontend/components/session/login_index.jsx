import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from './signup_form';
import LoginForm from './login_form';

const LoginIndex = ({openModal, closeModal, ui, signup, login, clearErrors, path, history, errors}) => {
  return (
    <section className="background-container">
      <img
        src="http://res.cloudinary.com/stromble/image/upload/v1514660639/fall-autumn-red-season_bjdaco.jpg"
        alt="autumn" />

        <nav className="login-nav">
          <ul className="login-ul">
            <Link to="/"><li className="logo">stromble</li></Link>
            <li>
              <button onClick={openModal} className="signup-button">
                Sign Up
              </button>
              {ui ?
                <SignUpForm
                  signup={signup}
                  clearErrors={clearErrors}
                  closeModal={closeModal}
                  path={path}
                  history={history}
                  errors={errors}
                /> :
                  null
              }
            </li>
          </ul>
        </nav>

      <LoginForm
        login={login}
        clearErrors={clearErrors}
        errors={errors}
        history={history}
        closeModal={closeModal}
      />
    </section>
  );
};


export default LoginIndex;
