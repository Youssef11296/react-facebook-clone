import { Avatar } from "@material-ui/core";
import {
  AccountCircle,
  ChatBubbleOutlined,
  ExpandMore,
  NearMe,
  ThumbUpSharp,
} from "@material-ui/icons";
import React from "react";
import "./Post.css";

const Post = ({ username, profilePic, timestamp, image, text }) => {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__info">
          <h3 className="post__username">{username}</h3>
          <p className="post__time">
            {new Date(timestamp?.toDate()).toUTCString()}
          </p>
        </div>
      </div>
      <div className="post__bottom">
        <p className="post__text">{text}</p>
      </div>
      <div className="post__image">{image && <img src={image} />}</div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUpSharp />
          <h3>Like</h3>
        </div>
        <div className="post__option">
          <ChatBubbleOutlined />
          <h3>Comment</h3>
        </div>
        <div className="post__option">
          <NearMe />
          <h3>Share</h3>
        </div>
        <div className="post__option">
          <AccountCircle />
          <ExpandMore />
        </div>
      </div>
    </div>
  );
};

export default Post;
