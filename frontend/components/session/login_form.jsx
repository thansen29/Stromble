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
      <section>
        <header>
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
        </header>
    </section>
    );
  }
}

export default LoginForm;
