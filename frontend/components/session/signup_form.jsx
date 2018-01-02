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

  sampleImage(){
    const img1 = <img src='http://res.cloudinary.com/stromble/image/upload/v1514660639/pexels-photo-302804_oy0xnz.jpg' />;
    const img2 = <img src='http://res.cloudinary.com/stromble/image/upload/v1514660638/road-sun-rays-path_t4dtzb.jpg' />;
    const img3 = <img src='http://res.cloudinary.com/stromble/image/upload/v1514660639/fall-autumn-red-season_bjdaco.jpg' />;
    const imagesArr = [img1, img2, img3];
    return imagesArr[Math.floor(Math.random()*imagesArr.length)];
  }

  render(){
    const image = this.sampleImage();

    return (
      <section className="background-container">
        { image }

        <nav className="landing-nav">
          <ul className="landing-ul">
            <li><h1>Here to join?</h1></li>
            <li><a href="#">Use my email</a></li>
            <li>
              <button className="login-button">
                <i class="fa fa-user" aria-hidden="true"></i>
                LOG IN
              </button>
            </li>
          </ul>
        </nav>


      </section>
    );
  }


}

export default SignupForm;
