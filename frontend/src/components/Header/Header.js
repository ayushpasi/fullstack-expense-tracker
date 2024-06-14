import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Header = () => {
  const { user } = useContext(AuthContext);

  return user ? (
    <></>
  ) : (
    <>
      <section id="topbar" class="d-flex align-items-center">
        <div class="container d-flex justify-content-center justify-content-md-between">
          <div class="contact-info d-flex align-items-center">
            <i class="bi bi-envelope d-flex align-items-center">
              <a href="mailto:contact@example.com">contact@example.com</a>
            </i>
            <i class="bi bi-phone d-flex align-items-center ms-4">
              <span>XXX XXX XXXX</span>
            </i>
          </div>
          <div class="social-links d-none d-md-flex align-items-center">
            <a href="https://www.twitter.com" className="twitter">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://www.facebook.com" className="facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com" className="instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://www.linkedin.com" className="linkedin">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
