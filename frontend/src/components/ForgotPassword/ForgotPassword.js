import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const ForgotPassword = () => {
  const forgotPasswordRef = useRef(null);

  useEffect(() => {
    if (forgotPasswordRef.current) {
      forgotPasswordRef.current.focus();
    }
  }, []);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const sendMail = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/password/send-mail`, {
        email: email,
      });

      setMessage("Reset email sent successfully."); // Example success message
      setEmail("");
    } catch (error) {
      setError("Failed to send reset email."); // Example error message
    }
  };

  return (
    <section id="forgot-password" className="about section-bg">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-12 py-6 px-5">
            <h2 className="display-5 mb-4">
              Forgot Password
              <span className="text-primary"> Here</span>
            </h2>
            {message && <div className="alert alert-success">{message}</div>}
            {error && <div className="alert alert-danger">{error}</div>}
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  ref={forgotPasswordRef}
                />
              </div>
              <br />
              <br />
              <div className="text-center">
                <button
                  type="button"
                  onClick={sendMail}
                  className="btn btn-primary"
                >
                  Send Reset Password Link
                </button>
                <br />
                <br />
                <Link to="/login" className="btn btn-link">
                  Back to Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
