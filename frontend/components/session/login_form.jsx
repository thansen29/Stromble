import React from 'react';

class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
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

  render(){
    return (
      <section className="background-container">
        <img src="http://res.cloudinary.com/stromble/image/upload/v1514660639/fall-autumn-red-season_bjdaco.jpg" alt="autumn" />
          <nav className="login-nav">
            <ul className="login-ul">
              <li className="logo">stromble</li>
              <li>
                <button className="signup-button">
                  Sign Up
                </button>
              </li>
            </ul>
          </nav>

          <form className="login-form" onSubmit={this.handleSubmit}>
            <h1>Log In</h1>

            <section className="input-container">
              <input className="input" type="text" placeholder="Your Email" />

              <input className="input" type="password" placeholder="Password" />

              <input className="submit" type="submit" value="Demo Log In" />

              <input className="submit" type="submit" value="Log In" />

              <div className="forgot-pw"></div>
          </section>
          </form>
    </section>
    );
  }
}

export default LoginForm;
