import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Post from "../Post/Post";
import "./feed.css";

export const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get("/api/videos");
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPosts();
  }, []);
  console.log(posts);
  return (
    <div className="feed">
      {posts.map((post) => (
        <Post key={post.id}  post={post}/>
      ))}
    </div>
  );
};
