import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlePremiumFeature = (e) => {
    if (!user.isPremium) {
      e.preventDefault();
      alert(
        "This feature is available for premium members only. Please upgrade to access."
      );
      navigate("/buypremium");
    }
  };

  return (
    <>
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a href="index.html">
              SmartSpend<span>.</span>
            </a>
          </h1>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link className="nav-item nav-link" to="/">
                  Home
                </Link>
              </li>

              {user ? (
                <>
                  <li>
                    <Link className="nav-item nav-link" to="/dashboard">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-item nav-link"
                      to="/report"
                      onClick={user.isPremiumUser ? null : handlePremiumFeature}
                    >
                      {user.isPremiumUser ? (
                        <>Report &#128142;</>
                      ) : (
                        <>Report &#128081;</>
                      )}
                    </Link>
                  </li>
                  <li>
                    <button className="nav-item nav-link btn" onClick={logout}>
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link className="nav-item nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-item nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-item nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-item nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </>
  );
};

export default NavBar;
