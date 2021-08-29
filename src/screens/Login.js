import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import axios from "../axios";
import UserController from "../classes/UserController";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [showFieldError, setShowFieldError] = useState("");
  // Login Button Click Event
  const login = () => {
    if (email === "" || password === "") {
      setShowFieldError(true);
    } else {
      if (email.endsWith("@gmail.com")) {
        axios.get("/api/user").then((response) => {
          console.log(response);
        });
        let User = new UserController(email, password);
        User.login(email, password);
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
                  <p className="login-card-description">
                    Sign into your account
                  </p>
                  <div className="showError">
                    {showFieldError === "invalid" && (
                      <small>Invalid Email or Password.</small>
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
                  <form action="#!">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email address"
                      />
                    </div>
                    <div className="form-group mb-4">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <input
                      className="btn btn-block login-btn mb-4"
                      type="button"
                      onClick={login}
                      value="Login"
                    />
                  </form>
                  <Link to="/passwordreset" className="forgot-password-link">
                    Forgot password?
                  </Link>
                  <p className="login-card-footer-text">
                    Don't have an account?
                    <Link to="/register" className="text-reset">
                      Register here
                    </Link>
                  </p>
                  <nav className="login-card-footer-nav">
                    <a href="#!">Terms of use.</a>
                    <a href="#!">Privacy policy</a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
