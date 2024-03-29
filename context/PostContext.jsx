/* eslint-disable react/prop-types */
import POSTS from "../data/posts";
import { createContext, useState } from "react";

export const PostsContext = createContext();

const PostProvider = (props) => {
  const [posts, setPosts] = useState(POSTS);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostProvider;
