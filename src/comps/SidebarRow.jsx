import React from "react";

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className="sidebar__row">
      {src && <img src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
};

export default SidebarRow;
