import React from "react";
import "./Sidebar.css";
import SidebarItem from "./SidebarItem";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import DevicesIcon from "@material-ui/icons/Devices";
import { useHistory } from "react-router-dom";
import UserController from "../classes/UserController";
function Sidebar(props) {
  const history = useHistory();
  const handleLogout = () => {
    let user = new UserController();
    user.logout();
  };
  const addDevice = () => {
    history.push("/addDevice");
  };
  const showDevice = () => {
    history.push("/showdevices");
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://zigron.goabode.com/assets/images/app-logo-2.svg"
          alt="logo"
        />
        <h3>Virtual Gateway</h3>
      </div>
      <div className="sidebarItems">
        <SidebarItem
          Icon={DashboardIcon}
          className="sidebarItems__active"
          title="Dashboard"
          style={{ color: "white" }}
        />
        <SidebarItem
          Icon={DevicesIcon}
          onClick={addDevice}
          title="Add Device"
        />
        <SidebarItem
          Icon={DevicesIcon}
          onClick={showDevice}
          title="Show Device"
        />

        <SidebarItem
          Icon={ExitToAppIcon}
          onClick={handleLogout}
          title="Logout"
        />
      </div>
    </div>
  );
}

export default Sidebar;
