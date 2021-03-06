import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import LandingIndex from './landing_index';

class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      hidden: true,
      emailError: false,
      passwordError: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  componentWillReceiveProps(newProps){
    if(newProps.errors.hasOwnProperty('email')){
      this.setState({ emailError: true });
    } else {
      this.setState({ emailError: false });
    }
    if(newProps.errors.hasOwnProperty('password')){
      this.setState({ passwordError: true });
    } else {
      this.setState({ passwordError: false});
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    delete user['hidden'];
    delete user['emailError'];
    delete user['passwordError'];
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
    if(this.props.history.location.pathname === "/login"){
      return <span onClick={ this.props.closeModal }> Log in</span>;
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
      <section>

        <form onSubmit={ this.handleSubmit } className="signup-form">
          <div
            className="modal-close"
            onClick={ this.props.closeModal }>
            &times;
          </div>

          <header className="form-header">
            <h1>Sign up for free</h1>
            <h3>Join for the tracking. Stay for the community.</h3>
          </header>

          <label htmlFor="email">Email</label>
          <input
            className={ this.state.emailError ? 'errors' : 'landing-input'}
            id="email"
            type="text"
            value={ this.state.email }
            onChange={ this.handleChange('email') }
          />

        <span className="error-message">{ this.props.errors.email }</span>

        <label htmlFor="password">New password</label>
          <i
            className={ `${ this.state.hidden ? 'fa fa-eye show' : 'fa fa-eye-slash hide'}` }
            onClick={ this.toggleShow }
            aria-hidden="true">
          </i>

          <input
            className={ this.state.passwordError ? 'errors' : 'landing-input'}
            id="password"
            type={ `${ this.state.hidden ? 'password' : 'text'}` }
            value={ this.state.password }
            onChange={ this.handleChange('password') }
          />

        <span className="error-message">{ this.props.errors.password }</span>

        <button className="signup-submit">Sign Up</button>

        </form>

          <span
            className="after">
            Already have an account? { this.handleLoginClick() }
          </span>

      </section>
    );
  }
}

export default SignupForm;
