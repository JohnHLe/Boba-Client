import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Blog from "../Blog";
import Header from "../Header";
import Sidebar from "../Sidebar";
import "../css/Home.css";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Blog posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
