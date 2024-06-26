import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const { login } = useContext(AuthContext);

  const loginRef = useRef(null);

  useEffect(() => {
    if (loginRef.current) {
      loginRef.current.focus();
    }
  }, []);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = () => {
    const userDetails = { email: email, password: password };
    console.log(userDetails);
    axios
      .post(process.env.REACT_APP_API_URL + "/user/login", userDetails)
      .then((response) => {
        // console.log(response.data);
        setOutput("User login successfully....");
        localStorage.setItem("token", response.data.token);
        login(response.data.token);
        navigate("/manage-expense");
      })
      .catch((error) => {
        console.log(error);
        setOutput("Unauthorized");
        setEmail("");
        setPassword("");
      });
  };

  return (
    <>
      <section id="about" className="about section-bg">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-12 py-6 px-5">
              <h2 className="display-5 mb-4">
                Login
                <span className="text-primary"> Here</span>
              </h2>
              <font color="blue">{output}</font>
              <form>
                <br />
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    ref={loginRef}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <br />
                <div className="text-center">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                  <br />
                  <br />
                  <Link to="/forgot-password" className="btn btn-link">
                    Forgot Password?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
