import axios from "../axios";
import React, { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
function AddDevice(props) {
  const [label, setLabel] = useState("");
  const [showFieldError, setShowFieldError] = useState("");
  const { username } = (props.location && props.location.state) || {};
  const history = useHistory();
  const addDevice = () => {
    if (label === "") {
      setShowFieldError("empty");
    } else {
      axios
        .post("/api/virtualgateway", { label: label, createdBy: username })
        .then((response) => {
          if (response.statusText === "OK") {
            history.push({
              pathname: "/Dashboard",
              state: {
                username: username,
              },
            });
          }
        });
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
                  <p className="login-card-description">Add Device</p>
                  <div className="showError">
                    {showFieldError === "empty" && (
                      <small>Label can't be Empty.</small>
                    )}
                  </div>
                  <form action="#!">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                        placeholder="Label"
                      />
                    </div>
                    <input
                      className="btn btn-block login-btn mb-4"
                      type="button"
                      onClick={addDevice}
                      value="Add Device"
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
export default AddDevice;
