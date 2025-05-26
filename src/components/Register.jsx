import React, { useState } from "react";
import { Link } from "react-router";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="register-section bg-netflix">
      <div className="overlay"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h3 className="text-uppercase text-center mb-4">
              Create an Account
            </h3>
            <h1 className="display-4 text-center mb-4 fw-medium">Join Us</h1>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Link to="/login" className="btn btn-danger btn-lg w-100 fw-bold">
                Register
              </Link>
            </form>
            <p className="text-center text-light mt-3">
              Already have an account?{" "}
              <Link to="/login" className="text-warning">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
