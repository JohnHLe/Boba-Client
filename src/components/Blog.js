import Post from "./Post";
import "./css/Blog.css";

function Blog({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}

export default Blog;
