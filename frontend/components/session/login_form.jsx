import React from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';

class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  componentDidMount(){
    this.props.closeModal();
    this.props.clearErrors();
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user).then(() => {
      this.props.history.push("/dashboard");
    });
    this.setState({
      email: "",
      password: ""
    });
  }

  handleChange(field){
    return e => {
      this.setState( { [field]: e.target.value } );
    };
  }

  handleErrors(){
    return (
      <div className="alert-errors">
        <div className="alert-message">
          { this.props.errors.credentials }
        </div>
      </div>
    );
  }

  handleDemoSubmit(e){
    e.preventDefault();

    const email = {
      strings: ["demouser@stromble.com"],
      typeSpeed: 40
    }

    const password = {
      strings: ["password"],
      typeSpeed: 40
    }

    new Typed('.email-input', email);
    new Typed('.password-input', password);

    const user = {
      email: "guestaccount1",
      password: "password"
    };

    // this.setState({
    //   email: "guestaccount1",
    //   password: "password"
    // });
    setTimeout(() => {
      this.props.login(user).then(() => {
        this.props.history.push("/dashboard");
      });
    }, 1400);
  }

  render(){
    let errorMessage;
    if(this.props.errors.credentials){
      errorMessage = this.handleErrors();
    }

    return (
      <form className="login-form" onSubmit={ this.handleSubmit }>
        <h1>Log In</h1>
        { errorMessage }

        <section className="input-container">
          <input
            onChange={ this.handleChange("email") }
            className="input email-input" type="text"
            placeholder="Your Email" />

            {/* value={ this.state.email } */}
            {/* value={ this.state.password } */}
          <input
            onChange={ this.handleChange("password") }
            className="input password-input" type="password"
            placeholder="Password" />

          <button
            className="submit"
            onClick={ this.handleDemoSubmit }>
            Demo Log In
          </button>

          <button className="submit">
            Log In
          </button>

          <div className="forgot-pw"></div>
        </section>
      </form>
    );
  }

}

export default LoginForm;
