import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import LandingIndex from './landing_index';

class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    // this.passwordError = null;
    // this.emailError = null;
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  handleSubmit(e){
    // may need to adjust this to handle the create profile modal
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user).then(() => {
      this.props.closeModal();
      this.props.history.push("/dashboard");
    });
    this.setState({
      email: "",
      password: ""
    });
  }

  handleChange(field){
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  // handleErrors(){
  //     if(this.props.errors.length === 2 ){
  //       this.emailError = this.props.errors[0];
  //       this.passwordError = this.props.errors[1];
  //     }
  //     if(this.props.errors.length === 1){
  //       if(this.props.errors.join().includes("Password")){
  //         this.passwordError = this.props.errors[0];
  //       }
  //       else {
  //         this.emailError = this.props.errors[0];
  //       }
  //     }
  // }

  // clickClose(){
  //   debugger
  //   // e.preventDefault();
  //   this.props.closeModal();
  // }

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

  render(){
    // this.handleErrors();
    // let errorEmail;
    // let errorPassword;
    // if(this.emailError) {
    //   errorEmail = <div className="signup-errors">{this.emailError}</div>;
    // }
    // if(this.passwordError) {
    //   errorPassword = <div className="signup-errors">{this.passwordError}</div>;
    // }


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
        {/*errorEmail*/}

        <label htmlFor="password">New password</label>
          <i className="fa fa-eye show" aria-hidden="true"></i>
          <input
            className="landing-input"
            id="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange('password')}
          />
        {/*errorPassword*/}

        <div className="terms">
          By signing up to you agree to Stromble's <a href="#">Terms and Conditions</a>
        </div>

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
// <Link to="/login">Log in</Link>
export default SignupForm;
