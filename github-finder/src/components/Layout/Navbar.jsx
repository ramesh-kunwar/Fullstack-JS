import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Navbar = ({ title }) => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container d-flex ">
        <div className="logo d-flex ">
          <FaGithub className="fs-2" />
          <Link class="navbar-brand px-3 fw-bold" to="/">
            Github Finder
          </Link>
        </div>

        <ul class="nav d-flex flex-end">
          <li class="nav-item">
            <Link class="nav-link active text-dark" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-dark" to="/about">
              About
            </Link>
          </li>
  
        </ul>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
};
Navbar.propTypes = {
  title: PropTypes.string,
};
export default Navbar;
