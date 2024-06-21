import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const NavBar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlePremiumFeature = (e) => {
    if (!user.isPremiumUser) {
      e.preventDefault();
      alert(
        "This feature is available for premium members only. Please upgrade to access."
      );
      navigate("/buy-premium");
    }
  };

  return (
    <>
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <Link to="//manage-expense">
              SmartSpend<span>.</span>
            </Link>
          </h1>
          <nav id="navbar" className="navbar">
            <ul>
              {user ? (
                <>
                  <li>
                    <Link className="nav-item nav-link" to="/">
                      Expenses
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-item nav-link"
                      to="/reports"
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
                    <Link
                      className="nav-item nav-link"
                      to="/leaderboard"
                      onClick={user.isPremiumUser ? null : handlePremiumFeature}
                    >
                      {user.isPremiumUser ? (
                        <>Leaderboard &#128142;</>
                      ) : (
                        <>Leaderboard &#128081;</>
                      )}
                    </Link>
                  </li>
                  <li>
                    <Link to="/buy-premium">
                      <button className="nav-item nav-link btn">
                        {user.isPremiumUser ? (
                          <>Buy Premium &#128142;</>
                        ) : (
                          <>Buy Premium &#128081;</>
                        )}
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/logout">
                      <button className="nav-item nav-link btn">Logout</button>
                    </Link>
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
