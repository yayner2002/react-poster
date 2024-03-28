import React, { useState } from "react";
import Post from "./Post";
import "./PostList.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

const PostList = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [bodyValue, setBodyValue] = useState("default body");
  const [authorValue, setAuthorValue] = useState("default author");

  const bodyChangeHandler = (e) => {
    setBodyValue(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setAuthorValue(e.target.value);
  };

  const modalCloseHandler = () => {
    setIsModalOpen(false);
  };

  const modalOpenHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <Modal onClose={modalCloseHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      )}

      <ul className="posts">
        <Post author={bodyValue} body={authorValue} />
      </ul>
    </>
  );
};

export default PostList;
