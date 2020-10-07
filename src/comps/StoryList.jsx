import React, { useState, useEffect } from "react";
import Story from "./Story";

const StoryContainer = () => {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 1000));
  }, []);
  return (
    <div className="story__list">
      <Story
        profilePic={`https://avatars.dicebear.com/api/human/${seed}.svg`}
        title="Youssef"
        bg="https://filmdaily.co/wp-content/uploads/2020/07/dirty-lede-1300x731.jpg"
      />
      <Story
        profilePic={`https://avatars.dicebear.com/api/human/${seed}.svg`}
        title="Omran"
        bg="https://images-na.ssl-images-amazon.com/images/I/71fDHPTG2dL._RI_.jpg"
      />
      <Story
        profilePic={`https://avatars.dicebear.com/api/human/${seed}.svg`}
        title="Gabrielle"
        bg="https://i.pinimg.com/564x/ca/9d/be/ca9dbe95ad377b153616f0d9a7de0711.jpg"
      />
      <Story
        profilePic={`https://avatars.dicebear.com/api/human/${seed}.svg`}
        title="Mina"
        bg="https://images.theconversation.com/files/135250/original/image-20160824-30216-zdyfu.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip"
      />
      <Story
        profilePic={`https://avatars.dicebear.com/api/human/${seed}.svg`}
        title="Gabrielle"
        bg="https://i.pinimg.com/564x/ca/9d/be/ca9dbe95ad377b153616f0d9a7de0711.jpg"
      />
    </div>
  );
};

export default StoryContainer;
