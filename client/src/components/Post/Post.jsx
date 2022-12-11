import React from "react";
import "./post.css";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post-img-container">
        <img
          className="post-img"
          src={post.img}
          alt=""
        />
        <span className="post-duration">{post.duration}</span>
        <div className="post-info-container">
          <img
            className="post-avatar"
            src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
            alt=""
          />
          <div className="post-info">
            <span className="post-title">React Form Validation</span>
            <span className="post-channel">Yasin Çoban</span>
            <span className="post-details">280K-1 week ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
