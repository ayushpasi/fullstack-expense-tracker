import { useState } from "react";
import axios from "axios";
function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [output, setOutput] = useState();

  const handleSubmit = () => {
    const userDetails = {
      name: name,
      email: email,
      password: password,
    };

    axios
      .post(process.env.REACT_APP_API_URL + "user/sign-up", userDetails)
      .then((response) => {
        setOutput("Registered succesfully");
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.log("error");
      });
  };

  return (
    <>
      <section id="about" className="about section-bg">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-12 py-6 px-5">
              <h2 className="display-5 mb-4">
                Register
                <span className="text-primary"> Here</span>
              </h2>
              <font color="green">{output}</font>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

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
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
