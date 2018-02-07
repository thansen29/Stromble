import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/session/session_actions';

const mapStateToProps = state => {
  debugger
  return {
    id: state.session.currentUser.id,
    avatarUrl: state.session.currentUser.avatar_url
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logout())
  };
};

const Navbar = ({id, logOut, avatarUrl}) => {
  // <Link to={`/users/${id}`}>My Profile</Link>
debugger
  return (
    <nav className="global-nav">
      <Link to="/dashboard"><div className="logo-nav">stromble</div></Link>

      <div className="nav-dashboard-container">
        <div className="nav-dropdown">
          <div className="nav-dropdown-content">
            <Link to="/routes">My Routes</Link>
          </div>
          <div className="nav-title">
            <Link to="/dashboard">Dashboard</Link>
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </div>
        </div>
      </div>

      <div className="nav-training-container">
        <div className="nav-dropdown">
          <div className="nav-dropdown-content">
            <Link to="/workouts">My Workouts</Link>
          </div>

          <div className="nav-title">Training
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </div>
        </div>
      </div>

      <div className="nav-profile-container">
        <div className="nav-profile-dropdown">
          <div className="nav-profile-dropdown-content">
            <Link to="/login" onClick={logOut}>Log Out</Link>
          </div>

          <div className="nav-avatar-container">
            <img className="nav-avatar" src={avatarUrl} />
            <i className="fa fa-angle-down profile-down nav-title" aria-hidden="true"></i>
          </div>
        </div>
      </div>

      <div className="nav-upload-container">
        <div className="nav-upload-button"></div>
        <div className="alt-nav-upload-button"></div>
        <div className="nav-upload-dropdown">
          <div className="nav-upload-dropdown-content">
            <Link to="/workouts/new">Create a workout</Link>
            <Link to="/routes/new">Create a route</Link>
          </div>

        </div>
      </div>

    </nav>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
