import React from "react";
import Post from "./Post";
import "./PostList.css";

const DUMMY_POSTS = [
  {
    id: 1,
    author: "yayner",
    body: "quia et suscipit\nsuscipit recusandae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    id: 2,
    author: "Max",
    body: "vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    id: 3,
    author: "Unknown",
    body: "et \nvoluptatem uis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
];

const PostList = () => {
  return (
    <ul className="posts">
      {DUMMY_POSTS.map((post) => (
        <Post key={post.id} author={post.author} body={post.body} />
      ))}
    </ul>
  );
};

export default PostList;
