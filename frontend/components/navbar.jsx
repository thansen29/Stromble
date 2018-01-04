import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
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
        <li className="upload-button"></li>
      </ul>
    </nav>
  );
};

export default Navbar;
