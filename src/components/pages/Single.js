import React from "react";
import Sidebar from "../Sidebar";
import SinglePost from "../SinglePost";
import "../css/Single.css";

function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}

export default Single;
