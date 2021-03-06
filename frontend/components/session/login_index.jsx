import React from 'react';
import { Link } from 'react-router-dom';
import SignupContainer from './signup_container';
import LoginForm from './login_form';
import ModalComponent from '../modals/modal_component';

const LoginIndex = ({ openModal, closeModal, ui, signup, login, clearErrors, history, errors }) => {
  return (
    <section className="background-container background-4">

        <nav className="login-nav">
          <ul className="login-ul">
            <Link to="/"><li className="logo">stromble</li></Link>
            <li>
              <button onClick={ openModal } className="signup-button">
                Sign Up
              </button>
              { ui ?
                <ModalComponent>
                  <SignupContainer history={ history } />
                </ModalComponent>
              : null }
            </li>
          </ul>
        </nav>

      <LoginForm
        login={ login }
        clearErrors={ clearErrors }
        errors={ errors }
        history={ history }
        closeModal={ closeModal }
      />
    </section>
  );
};


export default LoginIndex;
