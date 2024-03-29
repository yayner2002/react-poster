import { useState } from "react";
import Post from "./Post";
import "./PostList.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

const PostList = () => {
  const [bodyValue, setBodyValue] = useState("default body");
  const [authorValue, setAuthorValue] = useState("default author");
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const bodyChangeHandler = (e) => {
    setBodyValue(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setAuthorValue(e.target.value);
  };

  const handleClose = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      {modalIsOpen ? (
        <Modal onClose={handleClose}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      ) : null}
      {/* {modalIsOpen && (
        <Modal onClose={handleClose}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      )} */}

      <ul className="posts">
        <Post author={bodyValue} body={authorValue} />
      </ul>
    </>
  );
};

export default PostList;
