import React from "react";
import { useHistory } from "react-router-dom";
import "./NoDevice.css";
function NoDevice(props) {
  const history = useHistory();
  const { username } = (props.location && props.location.state) || {};
  const addDevice = () => {
    history.push({
      pathname: "/addDevice",
      state: {
        username: username,
      },
    });
  };
  return (
    <div className="noDevice">
      <img
        className="noDevice__img"
        // src="http://assets.stickpng.com/thumbs/5f42be5841b1ee000404b720.png"
        src="https://raw.githubusercontent.com/abdulrafaysalfi/Face-Recognition-JavaScript/master/labeled_images/Abdul%20Rafay/emptdata.png"
        alt="No Device"
      />
      <h3 className="noDevice__description">
        No Devices to Show.{" "}
        <span className="noDevice__addDevice" onClick={addDevice}>
          Add New Device
        </span>
      </h3>
    </div>
  );
}

export default NoDevice;
