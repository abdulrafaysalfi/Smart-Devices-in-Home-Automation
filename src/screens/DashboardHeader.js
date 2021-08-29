import React from "react";
import "./DashboardHeader.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory } from "react-router-dom";
import UserController from "../classes/UserController";
function DashboardHeader(props) {
  const history = useHistory();
  const handleLogout = () => {
    let user = new UserController();
    user.logout();
  };
  return (
    <div className="dashboardHeader">
      <div className="dashboardHeader__icon">
        <ExitToAppIcon onClick={handleLogout} />
      </div>
    </div>
  );
}

export default DashboardHeader;
