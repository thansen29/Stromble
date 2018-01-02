import React from 'react';
import { Link } from 'react-router-dom';

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
    if(this.props.errors.length > 0){
      return (
        this.props.errors[0]
      );
    }
  }

  handleDemoSubmit(e){
    e.preventDefault();
    const user = {
      email: "guest",
      password: "password"
    };
    this.setState({
      email: "guest",
      password: "password"
    });
    this.props.login(user).then(() => {
      this.props.history.push("/dashboard");
    });
  }

  render(){
    let errorMessage;
    if(this.props.errors.length > 0){
      errorMessage =
      <div className="alert-errors">
        <div className="alert-message">
          {this.handleErrors()}
        </div>
      </div>;
    }
    return (
      <section className="background-container">
        <img
          src="http://res.cloudinary.com/stromble/image/upload/v1514660639/fall-autumn-red-season_bjdaco.jpg"
          alt="autumn" />

          <nav className="login-nav">
            <ul className="login-ul">
              <Link to="/"><li className="logo">stromble</li></Link>
              <li>
                <button className="signup-button">
                  Sign Up
                </button>
              </li>
            </ul>
          </nav>

          <form className="login-form" onSubmit={this.handleSubmit}>
            <h1>Log In</h1>

            {errorMessage}

            <section className="input-container">
              <input
                onChange={this.handleChange("email")}
                value={this.state.email}
                className="input" type="text"
                placeholder="Your Email" />


              <input
                onChange={this.handleChange("password")}
                value={this.state.password}
                className="input" type="password"
                placeholder="Password" />

              <button
                className="submit"
                onClick={this.handleDemoSubmit}>
                Demo Log In
              </button>

              <button className="submit">
                Log In
              </button>

              <div className="forgot-pw"></div>
          </section>
          </form>
    </section>
    );
  }
}
// <input
//   className="submit"
//   type="submit"
//   value="Demo Log In" />
//
// <input
//   className="submit"
//   type="submit"
//   value="Log In" />

export default LoginForm;



// {redStripe}
// <div className="alert-message">
//   {this.handleErrors()}
// </div>
// {closingTag}
