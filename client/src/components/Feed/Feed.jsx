import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Post from "../Post/Post";
import "./feed.css";
import Skeleton from "../Skeleton/Skeleton";

export const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/videos");
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    getPosts();
  }, []);
  console.log(posts);
  return (
    <div className="feed">
      {isLoading ? (
        <Skeleton />
      ) : (
        posts.map((post) => <Post key={post.id} post={post} />)
      )}
    </div>
  );
};
