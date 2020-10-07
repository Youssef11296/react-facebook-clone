import React from "react";
import Posts from "./Posts";
import PostSender from "./PostSender";
import StoryList from "./StoryList";
import "./Feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <StoryList />
      <PostSender />
      <Posts />
    </div>
  );
};

export default Feed;
