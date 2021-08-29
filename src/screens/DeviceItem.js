import React from "react";
import "./DeviceItem.css";
import DevicesIcon from "@material-ui/icons/Devices";
function DeviceItem({ label, status, onClick }) {
  return (
    <div className="deviceItem" onClick={onClick}>
      <div className="icon">
        <DevicesIcon fontSize="large" className="deviceItem__icon" />
      </div>

      <h4>{label}</h4>
      <h3>{status}</h3>
    </div>
  );
}

export default DeviceItem;
