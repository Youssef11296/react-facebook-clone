import React, { useState, useEffect } from "react";
import Post from "./Post";
import db from "../firebase/Config";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  // Fetching The Posts From The Firebase DB
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="posts__container">
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.data.username}
          text={post.data.text}
          timestamp={post.data.timestamp}
          profilePic={post.data.profilePic}
          image={post.data.image}
        />
      ))}
    </div>
  );
};

export default Posts;
