import React from "react";
import { Avatar } from "@material-ui/core";
import "./Story.css";

const Story = ({ profilePic, title, bg }) => {
  return (
    <div className="story" style={{ background: `rgba(0,0,0,.3) url(${bg})` }}>
      <div className="story__content">
        <Avatar className="story__avatar" src={profilePic} />
        <h4 className="story__title">{title}</h4>
      </div>
    </div>
  );
};

export default Story;
