import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext"; // Adjust the import path accordingly

const Slider = () => {
  const { user } = useContext(AuthContext);

  return user ? null : (
    <div>
      <section id="hero" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <h1>
            Welcome to <span>SmartSpend</span>
          </h1>
          <h2>We Provide Solutions for Your Managing Expenses</h2>
          <div className="d-flex">
            <Link to="/register" className="btn-get-started scrollto">
              Get Started
            </Link>
            <a
              href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
              className="glightbox btn-watch-video"
            >
              <i className="bi bi-play-circle"></i>
              {/* <span>Watch Video</span> */}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slider;
