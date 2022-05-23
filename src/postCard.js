import React, { useState } from "react";
const PostCard = (list) => {
  let [likes, setLikes] = useState(0)
  const like = () => {
      setLikes(likes + 1);
  };
  const dislike = () => {
    if(likes === 0) {
      return;
    }
    setLikes(likes - 1);
  };
  return (
    <div className="whole-post">
      <h3 className="user-name">{list.userName || 'unknown'}</h3>
      <img src={list.image} alt='unable to load' className="image"/>
      <p className="text">{list.text}</p>
      <p>Likes: {likes}</p>
      <div className="footer">
          <button className="button-15" onClick={like}>like</button>
          <button className="button-15" onClick={dislike}>dislike</button>
      </div>
    </div>
  );
};

export default PostCard