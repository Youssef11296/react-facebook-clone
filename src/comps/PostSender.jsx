import React, { useState } from "react";
import { PhotoLibrary, InsertEmoticon } from "@material-ui/icons";
import VideocamIcon from "@material-ui/icons/Videocam";
import "./PostSender.css";
import { Avatar, Button } from "@material-ui/core";
import { useStateContext } from "../context/StateContext";
import db from "../firebase/Config";
import firebase from "firebase";

const PostSender = () => {
  const [{ user }, dispatch] = useStateContext();

  // The States
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  // Functions
  const handleSubmit = (e) => {
    e.preventDefault();
    // Some DB Codeing ...
    db.collection("posts").add({
      username: user.displayName,
      profilePic: user.photoURL,
      image: image,
      text: text,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setText("");
    setImage("");
  };

  return (
    <div className="post__sender">
      <div className="post__senderTop">
        <Avatar className="post__senedrAvatar" src={user.photoURL} />
        <form>
          <input
            type="text"
            placeholder={`What's on your mind, ${user.displayName} ?`}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="text"
            placeholder="Drag an image [Optional]"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            type="submit"
            value="Post"
            disabled={!text && !image}
          >
            Post
          </Button>
        </form>
      </div>
      <div className="post__senderBottom">
        <div className="post__senderOption">
          <VideocamIcon style={{ color: "#f00" }} />
          <h4>Live</h4>
        </div>
        <div className="post__senderOption">
          <PhotoLibrary style={{ color: "#080" }} />
          <h4>Photo/Video</h4>
        </div>
        <div className="post__senderOption">
          <InsertEmoticon style={{ color: "orange" }} />
          <h4>Feeling/Activity</h4>
        </div>
      </div>
    </div>
  );
};

export default PostSender;
