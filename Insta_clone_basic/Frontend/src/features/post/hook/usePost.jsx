import { getPosts } from "../services/post.api";
import { useContext, useEffect } from "react";
import { PostContext } from "../post.context";
import { createPost } from "../services/post.api";

export const usePost = () => {
  const context = useContext(PostContext);
  const { loading, setLoading, feed, setFeed, post, setPost } = context;

  const handleGetFeed = async () => {
    setLoading(true);
    const data = await getPosts();
    setFeed(data.posts);
    setLoading(false);
  }

  const handleCreatePost=async(image,caption)=>{
    setLoading(true);
    try{
      const response = await createPost(image,caption);
      setFeed([response.data.post,...feed]);
    }catch(err){
      throw err
    }finally{
      setLoading(false);
    }
  }

  return { loading, feed, post, handleGetFeed ,handleCreatePost}
}