import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session/session_actions';
import { openModal } from '../../actions/modals/modal_actions';
import NavbarSearch from './navbar_search';

const mapStateToProps = state => {
  return {
    id: state.session.currentUser.id,
    avatarUrl: state.session.currentUser.avatar_url,
    isOpen: state.ui.modal['isOpen']
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logout()),
    open: () => dispatch(openModal())
  };
};

const Navbar = ({id, logOut, avatarUrl, isOpen, open}) => {
  return (
    <nav className="global-nav">
      <Link to="/dashboard"><div className="logo-nav">stromble</div></Link>

    <div onClick={open}className="nav-search">
      <i className={isOpen ? null : "fa fa-search"} aria-hidden="true"></i>
    </div>

    { isOpen ?
      <NavbarSearch />
    :
      <section className="flex">
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
      </section>
    }

      <div className="nav-profile-container">
        <div className="nav-profile-dropdown">
          <div className="nav-profile-dropdown-content">
            <Link to={`/users/${id}`}>My Profile</Link>
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
