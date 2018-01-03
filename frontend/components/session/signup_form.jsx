import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.passwordError = null;
    this.emailError = null;
  }

  componentDidMount(){
    this.props.clearErrors();
    this.image = this.sampleImage();
  }

  handleSubmit(e){
    // may need to adjust this to handle the create profile modal
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user).then(() => {
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

  handleErrors(){
      if(this.props.errors.length === 2 ){
        this.emailError = this.props.errors[0];
        this.passwordError = this.props.errors[1];
      }
      if(this.props.errors.length === 1){
        if(this.props.errors.join().includes("Password")){
          this.passwordError = this.props.errors[0];
        }
        else {
          this.emailError = this.props.errors[0];
        }
      }
  }

  closeModal(){
    const modal = document.getElementById("modal-container");
    modal.classList.add("is-closed");
  }

  openModal(){
    const modal = document.getElementById("modal-container");
    modal.classList.remove("is-closed");
  }

  sampleImage(){
    const img1 = <img src='http://res.cloudinary.com/stromble/image/upload/v1514660639/pexels-photo-302804_oy0xnz.jpg' />;
    const img2 = <img src='http://res.cloudinary.com/stromble/image/upload/v1514660638/road-sun-rays-path_t4dtzb.jpg' />;
    const img3 = <img src='http://res.cloudinary.com/stromble/image/upload/v1514660639/fall-autumn-red-season_bjdaco.jpg' />;
    const imagesArr = [img1, img2, img3];
    return imagesArr[Math.floor(Math.random()*imagesArr.length)];
  }

  render(){
    this.handleErrors();
    let errorEmail;
    let errorPassword;
    if(this.emailError) {
      errorEmail = <div className="signup-errors">{this.emailError}</div>;
    }
    if(this.passwordError) {
      errorPassword = <div className="signup-errors">{this.passwordError}</div>;
    }

    return (
      <section className="background-container">
        { this.image }
        <Link to="/"><div className="top-left logo white">stromble</div></Link>
        <nav className="landing-nav">
          <ul className="landing-ul">
            <li><h1>Here to join?</h1></li>
            <li><a href="#" onClick={this.openModal}>Use my email</a></li>
            <li>
              <Link to="/login">
                <button className="login-button">
                  <i className="fa fa-user" aria-hidden="true"></i>
                  LOG IN
                </button>
              </Link>
            </li>
          </ul>
        </nav>

        <section id="modal-container" className="is-closed">
          <section className="modal-screen"></section>

          <form onSubmit={this.handleSubmit} className="signup-form">
            <span
              className="modal-close"
              onClick={this.closeModal}>
              X
            </span>

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
          {errorEmail}

          <label htmlFor="password">New password</label>
            <i className="fa fa-eye show" aria-hidden="true"></i>
            <input
              className="landing-input"
              id="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange('password')}
            />
          {errorPassword}

          <div className="terms">
            By signing up to you agree to Stromble's <a href="#">Terms and Conditions</a>
          </div>

          <button className="signup-submit">Sign Up</button>

          </form>

            <span
              className="after">
              Already have an account? <Link to="/login">Log in</Link>
            </span>
        </section>


      </section>
    );
  }

}

export default SignupForm;
