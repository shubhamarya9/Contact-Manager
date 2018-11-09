import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        {branding}
      </a>

      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <i className="fas fa-home" />
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className="nav-link">
            <i className="fas fa-question" />
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact/Add" className="nav-link">
            <i className="fas fa-plus" />
            Add
          </Link>
        </li>
      </ul>
    </nav>
  );
};
Header.prototype = {
  branding: PropTypes.string.isRequired
};

export default Header;
