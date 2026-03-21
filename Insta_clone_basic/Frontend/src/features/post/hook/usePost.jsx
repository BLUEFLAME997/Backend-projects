import { getPosts } from "../services/post.api";
import { useContext, useEffect } from "react";
import { PostContext } from "../post.context";

export const usePost = () => {
  const context = useContext(PostContext);
  const { loading, setLoading, feed, setFeed, post, setPost } = context;

  const handleGetFeed = async () => {
    setLoading(true);
    const data = await getPosts();
    setFeed(data.posts);
    setLoading(false);
  }

  return { loading, feed, post, handleGetFeed }
}