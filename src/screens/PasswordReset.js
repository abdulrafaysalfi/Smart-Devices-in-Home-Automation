import axios from "../axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import UserController from "../classes/UserController";
function PasswordReset() {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [emailExist, setEmailExist] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showFieldError, setShowFieldError] = useState("");
  const history = useHistory();
  useEffect(() => {
    axios.get("/api/user").then((response) => {
      const user = response.data.filter((element) => element.email === email);
      if (user.length === 0) {
        setEmailExist(false);
        setShowFieldError("not exist");
      } else {
        setEmailExist(true);
        setUserId(user[0]["_id"]);
      }
    });
  }, [email]);
  const handleReset = () => {
    if (email === "" || password === "" || confirmPassword === "") {
      setShowFieldError("empty");
    } else {
      if (email.endsWith("@gmail.com")) {
        if (password === confirmPassword) {
          let User = new UserController();
          User.changePassword(userId, email, password, confirmPassword);
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
                  <p className="login-card-description">Password Reset</p>
                  <div className="showError">
                    {showFieldError === "invalid" && (
                      <small>
                        Unable to Create Account. Email already exist.
                      </small>
                    )}
                  </div>
                  <div className="showError">
                    {showFieldError === "no exist" && (
                      <small>Email doesn't already exist.</small>
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
                  <form action={handleReset}>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        on
                        placeholder="Email address"
                        required
                      />
                    </div>
                    {emailExist && (
                      <div className="form-group mb-4">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="New Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required="true"
                        />
                      </div>
                    )}
                    {emailExist && (
                      <div className="form-group mb-4">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Confirm New Password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required="true"
                        />
                      </div>
                    )}
                    <input
                      className="btn btn-block login-btn mb-4"
                      type="button"
                      onClick={handleReset}
                      value="Reset Password"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PasswordReset;
