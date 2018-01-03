import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from './signup_form';
import LoginForm from './login_form';

class LoginIndex extends React.Component {
  // constructor(props){
    // super(props);

    // this.props.clearErrors();
  // }

  // componentDidMount(){
  //   this.props.closeModal();
  // }

  render(){
    return (
      <section className="background-container">
        <img
          src="http://res.cloudinary.com/stromble/image/upload/v1514660639/fall-autumn-red-season_bjdaco.jpg"
          alt="autumn" />

          <nav className="login-nav">
            <ul className="login-ul">
              <Link to="/"><li className="logo">stromble</li></Link>
              <li>
                <button onClick={this.props.openModal} className="signup-button">
                  Sign Up
                </button>
                {this.props.ui ?
                  <SignUpForm
                    signup={this.props.signup}
                    clearErrors={this.props.clearErrors}
                    closeModal={this.props.closeModal}
                    path={this.props.match.path}
                    history={this.props.history}
                    errors={this.props.errors}
                  /> :
                    null
                }
              </li>
            </ul>
          </nav>

        <LoginForm
          login={this.props.login}
          clearErrors={this.props.clearErrors}
          errors={this.props.errors}
          history={this.props.history}
          closeModal={this.props.closeModal}
        />
      </section>
    );
  }
}

export default LoginIndex;
