import axios from "../axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import UserController from "../classes/UserController";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showFieldError, setShowFieldError] = useState("");
  const history = useHistory();
  const handleRegister = () => {
    if (email === "" || password === "" || confirmPassword === "") {
      setShowFieldError("empty");
    } else {
      if (email.endsWith("@gmail.com")) {
        if (password === confirmPassword) {
          let User = new UserController();
          User.register(email, password, confirmPassword);
        } else {
          setShowFieldError("invalidPass");
        }
      } else {
        setShowFieldError("invalidEmail");
      }
    }
  };
  return (
    <div>
      <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
        <div className="container">
          <div className="card login-card">
            <div className="row no-gutters">
              <div className="col-md-5">
                <img
                  src="https://zigron.goabode.com/assets/images/backgrounds/login-image.jpg"
                  alt="login"
                  className="login-card-img"
                />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <div className="brand-wrapper">
                    <img
                      src="https://zigron.goabode.com/assets/images/app-logo.svg"
                      alt="logo"
                      className="logo"
                    />
                  </div>
                  <p className="login-card-description">Create your account</p>
                  <div className="showError">
                    {showFieldError === "invalid" && (
                      <small>
                        Unable to Create Account. Email already exist.
                      </small>
                    )}
                  </div>
                  <div className="showError">
                    {showFieldError === "invalidEmail" && (
                      <small>Invalid Email. Enter Valid Email.</small>
                    )}
                  </div>
                  <div className="showError">
                    {showFieldError === "empty" && (
                      <small>Email and Password can't be Empty.</small>
                    )}
                  </div>
                  <div className="showError">
                    {showFieldError === "invalidPass" && (
                      <small>Password and Confirm Password must be same.</small>
                    )}
                  </div>
                  <form action="#!">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email address"
                        required
                      />
                    </div>
                    <div className="form-group mb-4">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required="true"
                      />
                    </div>
                    <div className="form-group mb-4">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required="true"
                      />
                    </div>
                    <input
                      className="btn btn-block login-btn mb-4"
                      type="button"
                      onClick={handleRegister}
                      value="Register"
                    />
                  </form>
                  <p className="login-card-footer-text">
                    Already have an account?{" "}
                    <Link to="/" className="text-reset">
                      Log in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Register;
