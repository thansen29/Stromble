import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/session/session_actions';

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logout())
  };
};

const Navbar = (props) => {
  return (
    <nav className="global-nav">
      <Link to="/dashboard"><div className="logo-nav">stromble</div></Link>

      <div className="nav-dropdown">
        <div className="nav-dropdown-content">
          <Link to="/routes">My Routes</Link>
        </div>

        <div className="nav-title">Dashboard
          <i className="fa fa-angle-down" aria-hidden="true"></i>
        </div>
      </div>

      <div className="nav-dropdown">
        <div className="nav-dropdown-content">
          <Link to="/workouts">My Workouts</Link>
        </div>

        <div className="nav-title">Training
          <i className="fa fa-angle-down" aria-hidden="true"></i>
        </div>
      </div>


      <div className="nav-profile-dropdown">
        <div className="nav-profile-dropdown-content">
          <Link to="#">My Profile</Link>
          <Link to="/login" onClick={props.logOut}>Log Out</Link>
        </div>

        <div className="nav-avatar">
          <i className="fa fa-angle-down profile-down" aria-hidden="true"></i>
        </div>
      </div>


      <div className="nav-upload-dropdown">
        <div className="nav-upload-dropdown-content">
          <Link to="/workouts/new">Create Workout</Link>
          <Link to="/routes/new">Create a route</Link>
        </div>

        <div className="nav-upload-button"></div>

      </div>
    </nav>
  );
};

// <div className="nav-avatar">
//   <i className="fa fa-angle-down profile-down" aria-hidden="true"></i>
// </div>
export default connect(null, mapDispatchToProps)(Navbar);
