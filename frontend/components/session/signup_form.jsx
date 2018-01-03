import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import LandingIndex from './landing_index';

class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      hidden: true
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  handleSubmit(e){
    // may need to adjust this to handle the create profile modal
    e.preventDefault();
    const user = Object.assign({}, this.state);
    delete user['hidden'];
    this.props.signup(user).then(() => {
      this.props.closeModal();
      this.props.history.push("/dashboard");
    });
  }

  handleChange(field){
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }


  handleLoginClick(){
    if(this.props.path){
      return <span onClick={this.props.closeModal}> Log in</span>;
    } else {
      return (
        <span>
          <Link to="/login"> Log in</Link>
        </span>
      );
    }
  }

  toggleShow(){
    this.setState({ hidden: !this.state.hidden });
  }

  render(){
    return (
      <section id="modal-container">
        <section className="modal-screen"></section>

        <form onSubmit={this.handleSubmit} className="signup-form">
          <div
            className="modal-close"
            onClick={this.props.closeModal}>
            X
          </div>

          <header className="form-header">
            <h1>Sign up for free</h1>
            <h3>Join for the tracking. Stay for the community.</h3>
          </header>

          <label htmlFor="email">Email</label>
          <input
            className="landing-input"
            id="email"
            type="text"
            value={this.state.email}
            onChange={this.handleChange('email')}
          />

        <span className="error-message">{ this.props.errors.email }</span>

        <label htmlFor="password">New password</label>
          <i
            className={`${ this.state.hidden ? 'fa fa-eye show' : 'fa fa-eye-slash hide'}`}
            onClick={this.toggleShow}
            aria-hidden="true">
          </i>

          <input
            className="landing-input"
            id="password"
            type={`${ this.state.hidden ? 'password' : 'text'}`}
            value={this.state.password}
            onChange={this.handleChange('password')}
          />

        <span className="error-message">{ this.props.errors.password }</span>

        <button className="signup-submit">Sign Up</button>

        </form>

          <span
            className="after">
            Already have an account? {this.handleLoginClick()}
          </span>

      </section>
    );
  }

}
// will add in a fun terms at some point in the future
// <div className="terms">
//   By signing up to you agree to Stromble's <a href="#">Terms and Conditions</a>
// </div>

export default SignupForm;
