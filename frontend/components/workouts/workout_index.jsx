import React from 'react';
import WorkoutForm from './workout_form';
import { Link } from 'react-router-dom';

const WorkoutIndex = (props) => {
  return (
    <section className="background">
      <nav className="global-nav">
        <ul>
          <Link to="/dashboard"><li className="logo-nav">stromble</li></Link>
          <li>Dashboard
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </li>
          <li className="training">Training
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </li>
          <li className="avatar">Pic
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </li>
          <li className="upload-button">


          </li>
        </ul>
      </nav>

    </section>
  );
};

export default WorkoutIndex;
