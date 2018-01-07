import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className="global-nav">
      <Link to="/dashboard"><div className="logo-nav">stromble</div></Link>
      <div className="nav-dropdown">
        <div className="nav-dropdown-content">
          <Link to="/routes">My Routes</Link>
        </div>
        
        <div className="nav-dashboard">Dashboard
          <i className="fa fa-angle-down" aria-hidden="true"></i>


        </div>
      </div>

      <div className="nav-training">Training
        <i className="fa fa-angle-down" aria-hidden="true"></i>
          <div className="nav-dropdown-content">
            <Link to="/workouts">My Workouts</Link>
          </div>
      </div>
      <div className="nav-avatar">
        <i className="fa fa-angle-down profile-down" aria-hidden="true"></i>
      </div>
      <div className="nav-upload-button"></div>
    </nav>
  );
};

export default Navbar;
