import React from "react";
import "../App.css";
import "./css/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-titles">
        <span className="header-title-lg">Blog</span>
      </div>
      <video
        className="header-bg"
        src="/videos/reactvid.mp4"
        autoPlay
        loop
        muted
      />
    </div>
  );
}

export default Header;
