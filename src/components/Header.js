import React from "react";
import "../App.css";
import "./css/Header.css";
import { Link } from "react-router-dom";
import axios from "axios";

function HeroSection() {
  const baseUrl = "http://localhost:5000";

  const getHome = () => {
    axios
      .get(baseUrl)
      .then((res) => {
        alert("i finally connected my frontend to ur moms backend");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="hero-container">
      <video src="/videos/reactvid.mp4" autoPlay loop muted />
      <h1>Good Times, Good Boba</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <button
          className={`btn ${"btn--outline"} ${"btn--large"}`}
          onClick={getHome}
        >
          GET
        </button>
        <Link to="/sign-up">
          <button className={`btn ${"btn--outline"} ${"btn--large"}`}>
            GET STARTED
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
