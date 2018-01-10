import React from 'react';
import { Link } from 'react-router-dom';
import SignupContainer from './signup_container';

class LandingIndex extends React.Component {
  constructor(props){
    super(props);
    this.image = null;
  }

  componentDidMount(){
    this.props.clearErrors(); //why does the image not render without this?
    this.image = this.sampleImage();
  }

  sampleImage(){
    const img1 = <img src='http://res.cloudinary.com/stromble/image/upload/v1514660639/pexels-photo-302804_oy0xnz.jpg' />;
    const img2 = <img src='http://res.cloudinary.com/stromble/image/upload/v1514660638/road-sun-rays-path_t4dtzb.jpg' />;
    const img3 = <img src='http://res.cloudinary.com/stromble/image/upload/v1514660639/fall-autumn-red-season_bjdaco.jpg' />;
    const imagesArr = [img1, img2, img3];
    return imagesArr[Math.floor(Math.random()*imagesArr.length)];
  }

  render(){
    return (
      <section className="background-container">
        <div className="top-left logo white">stromble</div>
        { this.image }
        <div className="improvise white">Improvise. Adapt. Overcome</div>
        <nav className="landing-nav">
          <ul className="landing-ul">
            <li><h1>Here to join?</h1></li>
            <li>
              <p onClick={this.props.openModal}>Use my email</p>
              {this.props.ui ?
                <SignupContainer history={this.props.history} /> : null
              }
            </li>
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
      </section>
    );
  }
}

export default LandingIndex;
