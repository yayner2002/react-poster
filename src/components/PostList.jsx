import React, { useState } from "react";
import Post from "./Post";
import "./PostList.css";
import NewPost from "./NewPost"

const PostList = () => {
  const [bodyValue, setBodyValue ] = useState("default body")
  const [authorValue, setAuthorValue ] = useState("default author")

  const bodyChangeHandler = (e) => {
    setBodyValue(e.target.value)
  }

  const authorChangeHandler = (e) => {
    setAuthorValue(e.target.value)
  }

  return (
    <>
    <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
    <ul className="posts">
        <Post author={bodyValue} body={authorValue} />
    </ul>
    </>
  );
};

export default PostList;
