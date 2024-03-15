/* eslint-disable react/prop-types */
import "./Post.css";

const Post = (props) => {
  return (
    <li className="post">
      <p className="text">{props.body}</p>
      <p className="author">{props.author}</p>
    </li>
  );
};

export default Post;
