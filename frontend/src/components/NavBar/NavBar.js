import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a href="index.html">
              SmartSpend<span>.</span>
            </a>
          </h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html" className="logo"><img src="assets/img/logo.png" alt=""></a> */}
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-item nav-link active">
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li>
                <a className="nav-item nav-link">
                  <Link to="/about">About</Link>
                </a>
              </li>
              <li>
                <a className="nav-item nav-link">
                  <Link to="/contact">Contact</Link>
                </a>
              </li>
              <li>
                <a className="nav-item nav-link">
                  <Link to="/service">Service</Link>
                </a>
              </li>
              <li>
                <a className="nav-item nav-link">
                  <Link to="/register">Register</Link>
                </a>
              </li>
              <li>
                <a className="nav-item nav-link">
                  <Link to="/login">Login</Link>
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </>
  );
};

export default NavBar;
