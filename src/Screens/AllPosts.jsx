import { useContext } from "react";
import { PostsContext } from "../../context/PostContext";
import Post from "../components/Post";

const AllPosts = () => {
  const { posts } = useContext(PostsContext);

  return (
    <div>
      <h1> All Posts</h1>
      {posts.map((post) => (
        <Post key={post.id} author={post.author} body={post.body} />
      ))}
    </div>
  );
};

export default AllPosts;
