import React from 'react';
import { Link } from 'react-router-dom';
import SignupContainer from './signup_container';
import ModalComponent from '../modals/modal_component';

class LandingIndex extends React.Component {
  constructor(props){
    super(props);
    this.image = null;
  }

  componentDidMount(){
    this.props.clearErrors();
    this.image = this.sampleImage();
  }

  sampleImage(){
    const img1 = "background-1";
    const img2 = "background-2";
    const img3 = "background-3";
    const imagesArr = [img1, img2, img3];
    return imagesArr[Math.floor(Math.random()*imagesArr.length)];
  }

  render(){
    return (
      <section className={ `${this.image} background-container` }>
        <div className="top-left logo white">stromble</div>

        <div className="improvise white">Improvise. Adapt. Overcome</div>
        <nav className="landing-nav">
          <ul className="landing-ul">
            <li><h1>Here to join?</h1></li>
            <li>
              <p onClick={ this.props.openModal }>Use my email</p>
              { this.props.ui ?
              <ModalComponent>
                <SignupContainer history={ this.props.history } />
              </ModalComponent>
              : null }
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
