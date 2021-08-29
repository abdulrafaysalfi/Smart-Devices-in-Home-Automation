import React from "react";
import "./SidebarItem.css";

function SidebarItem({ Icon, title, onClick, style }) {
  return (
    <div className="sidebarItem">
      <Icon color="white" />
      <h3 onClick={onClick} style={style}>
        {title}
      </h3>
    </div>
  );
}

export default SidebarItem;
